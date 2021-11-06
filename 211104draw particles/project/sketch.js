let video;
let vScale = 16;
let particle = [];
let sider;

function setup(){
  createCanvas(640,480);
  slider = createSlider(0,255,127);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);

  for (let i=0; i<50; i++){
    particle[i] = new particles(random(width),random(height));
  }
  background(0);
}

function draw(){
  video.loadPixels();
  for (let i=0; i<50; i++){
  particle[i].update();
  particle[i].show();
  }
}