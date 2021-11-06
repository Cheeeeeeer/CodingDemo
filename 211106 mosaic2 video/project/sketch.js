let video;

function setup(){
  createCanvas(550,400);
  video = createCapture(VIDEO);
  video.size(550,400);
  video.hide();
  //video.loadPixels(); //to make anima, add it to the draw function
  //pixelDensity(1);
  noStroke();
}

function draw(){
  //background(255);
  video.loadPixels();
for (let i=0;i<width;i+=10){
  for (let p=0;p<height;p+=10){
  let index = (i+p*width)*4;

  let r = video.pixels[index];
  let g = video.pixels[index+1];
  let b = video.pixels[index+2];
  fill(r,g,b);

  rect(i,p,10,10);

  }
}
}