let video;
let Vscale = 16;
let slider;
let cols = 40;
let rows = 30;
let box = [];
 
function setup() {
  //createCanvas(640, 480);
  noCanvas();
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols,rows);
  video.hide();

  for (let y=0; y<rows; y++){
    for (let x=0; x<cols; x++){
      let mirror = createCheckbox();
      mirror.parent('mirror');
      mirror.position(x*20,y*20);
      box.push(mirror);
    }
    let linebreak = createSpan('<br/>');
    linebreak.parent('mirror');
  }
  slider = createSlider(0,255,127);
}

function draw() {
  background(0);
  video.loadPixels();
  for (let y=0;y<video.height;y++){
    for (let x=0;x<video.width;x++){
      //let index = (x+video.width*y)*4;
      let index = (video.width - x +1 + (video.width*y))*4; //reverse the cam

      let r = video.pixels[index+0];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];
      let bright = (r+g+b)/3; //equal value = grey
      let w = map(bright,0,255,0,Vscale);

      let checkIndex = x+y*cols;

      //pixels[index] = r;
      //pixels[index+1] = g;
      //pixels[index+2] = b;
      //pixels[index+3] = 255;

      var threshold = slider.value();

      if (bright>threshold){
         fill(255);
         box[checkIndex].checked(false);
      }else{
        fill(0);
        box[checkIndex].checked(true);
      }
      noStroke();
      //fill(bright);
      //rectMode(CENTER);
      ellipse(x*Vscale,y*Vscale,w,w);
    }
  }
  video.updatePixels();
}