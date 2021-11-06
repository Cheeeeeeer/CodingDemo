let video;
let cols = 25;
let rows = 25;

function setup(){
  createCanvas(400,400);

  //pixelDensity(1);
  video = createCapture(VIDEO);
  //video.size(640,480);
  video.hide();
  video.loadPixels();

  rectMode(CENTER);
  noStroke();
}

function draw(){
for (let i=0;i<cols;i++){
  for (let p=0;p<rows;p++){
    fill(
      video.get(
      (width/cols)*i,
      (height/rows)*p
      )
    );

    push();
    translate((width/cols)*i,(height/rows)*p);
    if (((i+p))%2==0){
      ellipse(0,0,(width/cols),(height/rows));
    }else{
      rect(0,0,(width/cols),(height/rows));
    }
    pop();
  }
}
}