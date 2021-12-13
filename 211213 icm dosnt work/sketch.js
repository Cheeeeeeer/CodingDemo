let picCvs;
let canvasCopy;

function setup() {
  picCvs = createCanvas(400, 400);
}

function draw() {
    
  if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX, mouseY);
  }
   canvasCopy = picCvs.get();
  
}

