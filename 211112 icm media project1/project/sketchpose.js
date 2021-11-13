let video;
let Vscale = 16;
let jettersin=0;
let angle=0;
let poseNet;
let pose;
let rightW;
let leftW;

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function setup(){
createCanvas(1200,800);
scale(-1,1);
video = createCapture(VIDEO);
video.size(width,height);
pixelDensity(1);
video.hide();
colorMode(HSB);

poseNet = ml5.poseNet(video);
poseNet.on("pose", gotPoses);

//gravity = createVector(0, 0.01);

}

function draw(){
  background(255);
  video.loadPixels();
  jettersin = constrain(sin(angle),1,1);

  if (pose) {
    rightW = pose["rightWrist"];
    leftW = pose["leftWrist"];
    // fill("red");
    // ellipse(width - rightW.x, rightW.y, 20, 20);
    // ellipse(width - leftW.x, leftW.y, 20, 20);

    //let hue = map(mouseX,0,width,0,360);
    //let saturation = map(mouseY,0,height,0,100);


    for (let y=0;y<video.height;y+=16){
      for (let x=0;x<video.width;x+=16){
        //let index = (width/Vscale - x +1 + (width/Vscale*y))*4; //reverse the cam
        let index = (x+y*video.width)*4;

        

        let r = video.pixels[index+0];
        let g = video.pixels[index+1];
        let b = video.pixels[index+2];
        let bright = (r+g+b)/3; //equal value = grey

        let r1 = map(rightW.x,0,width,0,255);
        let g1 = map(leftW.y,0,height,0,255);
  
        console.log(b);
        let ellipsewidth = map(bright,255,0,0,14);
        fill(r1,g1,b);
        noStroke();
      //   if (bright>127){
      //   ellipse(x*Vscale,y*Vscale,ellipsewidthwhite,ellipsewidthwhite);
          
      //  }else{
      //   ellipse(x*Vscale,y*Vscale,ellipsewidthblack,ellipsewidthblack);
      //  }
      //fill(hue,saturation,100-bright);
       ellipse(x,y,ellipsewidth+jettersin,ellipsewidth+jettersin);
       //ellipse(x,y,20,20);
       
     }
    }
    angle+=0.01;
    video.updatePixels();
    }
  }





function colorChanged(){

  
}