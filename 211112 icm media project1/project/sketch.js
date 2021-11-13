let video;
let Vscale = 16;
let jettersin=0;
let angle=0;


function setup(){
createCanvas(600,600);
video = createCapture(VIDEO);
video.size(width/Vscale,height/Vscale);
pixelDensity(1);
video.hide();
}

function draw(){
background(255);
video.loadPixels();
jettersin = constrain(sin(angle),1,1);

for (let y=0;y<video.height;y++){
  for (let x=0;x<video.width;x++){
    //let index = (x+video.width*y)*4;
    let index = (video.width - x +1 + (video.width*y))*4; //reverse the cam

    let r = video.pixels[index+0];
    let g = video.pixels[index+1];
    let b = video.pixels[index+2];
    let bright = (r+g+b)/3; //equal value = grey
    let ellipsewidthblack = map(bright,0,255,0,Vscale-2);
    let ellipsewidthwhite = map(bright,0,255,0,5);
    fill(0);
    noStroke();
  //   if (bright>127){
  //   ellipse(x*Vscale,y*Vscale,ellipsewidthwhite,ellipsewidthwhite);
      
  //  }else{
  //   ellipse(x*Vscale,y*Vscale,ellipsewidthblack,ellipsewidthblack);
  //  }
   ellipse(x*Vscale,y*Vscale,ellipsewidthblack+jettersin,ellipsewidthblack+jettersin);
   
 }
}
angle+=0.01;
video.updatePixels();
}