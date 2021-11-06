let video;
let y = 0;

function setup(){
  createCanvas(800,800);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320,240);

}

function draw(){
  //background(0);
  //image(video,0,0);
  video.loadPixels();
  copy(video,0,180,320,1,0,y,800,1);

  y+=1;


  //resetar the program if y > w
  if (y>height){
    y = 0;
  }
}