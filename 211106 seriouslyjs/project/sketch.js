let video;
let canvas;
let slider;

function setup(){
  canvas = createCanvas(640,480,WEBGL);
  canvas.id('p5canvas');
  slider = createSlider(0,1,0.5,0.01);
  slider.id('p5slider');

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(640,480);
  video.id('p5video');
  video.hide();

  let seriously = new Seriously();
  let src = seriously.source('#p5video');
  let target = seriously.target('#p5canvas')
  let blur = seriously.effect('blur');
  blur.amount = '#p5slider';
  blur.source = src;
  target.source = blur;

  seriously.go();
}