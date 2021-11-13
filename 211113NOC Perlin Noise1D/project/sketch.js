let xoff=0;
let startValue = 0;//change the xoff start

function setup(){
createCanvas(600,600);
noFill();
}

function draw(){
background(0);
xoff = startValue; //it looks like a hearbeat rate cuz xoff is valued in the draw function
beginShape();
for (x=0;x<width;x++){
  stroke(255);
  let y = noise(xoff)*height;
  vertex(x,y);
  xoff+=0.01;
}
endShape();
startValue+=0.01;
}
