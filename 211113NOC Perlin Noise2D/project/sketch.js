let off=0;
let startValue = 0;//change the off start

function setup(){
createCanvas(600,600);
noFill();
}

function draw(){
background(0);
off = startValue; //it looks like a hearbeat rate cuz off is valued in the draw function
beginShape();
for (x=0;x<width;x++){
  stroke(255);
  let y = noise(off)*height;
  vertex(x,y);
  off+=0.01;
}
endShape();
startValue+=0.01;
}
