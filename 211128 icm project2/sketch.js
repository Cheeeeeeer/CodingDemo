let finalStroke = [];
let generate,stop,restart;
let songs = [];
let songIndex = 0;
let newSongId = [];

let isReplaying = false;
let replayIndex = 0;

function preload(){
  for (let i=0;i<7;i++){
   songs[i] = loadSound('soundEff'+'/'+i+'.mp3',readyo);
   songs[i].playMode('restart');
  }
}
function readyo(){
  print('ready');
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let cvs= createCanvas(windowWidth, windowHeight);
  cvs.position(0,0);
  cvs.style('z-index',-1);
  background(255);
  strokeWeight(6);
  
  generate = select('#generate');
  generate.mousePressed(playYourStroke);
  
  restart = select('#restart');
  restart.mousePressed(restartSketch);
  
  stop = select('#reset');
  stop.mousePressed(stopPlayingEverything);
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX, mouseY);
  }
  
  
  if (isReplaying) {
    //let note = newSongId[replayIndex];//get the 1st song id
    //console.log(note);
    
    //if no song is playing now
    if (!songs[newSongId[replayIndex]].isPlaying()) {
    replayIndex++;
    if (replayIndex>newSongId.length-1){
    replayIndex = 0;
  }
    //songs[newSongId[replayIndex]].rate(1.5);
    songs[newSongId[replayIndex]].play();
  }
  }
}

function restartSketch(){
  //clear the sketch and contents in arr
  clear();
  background(255);
  finalStroke = [];
  newSongId = [];
  isReplaying = false;
}

function stopPlayingEverything(){
  isReplaying = false;
}

function mouseReleased() {
  //play a single note when mouse pressed
  let moY = mouseY;
  let moX = mouseX;
  finalStroke.push([moX,moY]);
 // console.log(finalStroke);
  //finalStroke.push(-1);
  let h = height / 6;
  let values = [h, h * 2, h * 3, h * 4, h * 5, h * 6];
  if (moY < values[0]) {
    //print("do");
    songs[0].play();
  } else if (moY < values[1]) {
    //print("re");
    songs[1].play();
  } else if (moY < values[2]) {
    //print("mi");
    songs[2].play();
  } else if (moY < values[3]) {
    //print("fa");
    songs[3].play();
  } else if (moY < values[4]) {
    //print("so");
    songs[4].play();
  } else if (moY < values[5]) {
    //print("la");
    songs[5].play();
  } else if (moY < values[6]) {
    //print("ci");
    songs[6].play();
  } 
}


function playYourStroke(){
  //store and get the id of note
  
  //get a sorted array
  finalStroke = finalStroke.sort(function(a, b) {
    return a[0] - b[0];
  });
  //console.log(finalStroke);
  
  let h = height / 8;
  let values = [h, h * 2, h * 3, h * 4, h * 5, h * 6];
  
  for (let oo=0;oo<finalStroke.length;oo++){
    if (finalStroke[oo][1] < values[0]) {
    newSongId.push(0);
  } else if (finalStroke[oo][1] < values[1]) {
    newSongId.push(1);
  } else if (finalStroke[oo][1] < values[2]) {
    newSongId.push(2);
  } else if (finalStroke[oo][1] < values[3]) {
    newSongId.push(3);
  } else if (finalStroke[oo][1] < values[4]) {
    newSongId.push(4);
  } else if (finalStroke[oo][1] < values[5]) {
    newSongId.push(5);
  } else if (finalStroke[oo][1] < values[6]) {
    newSongId.push(6);
  } 
  }
   isReplaying = true;
  console.log(newSongId);
}

function mousePressed(){
  stroke(random(180,255),random(180,220),random(180,220));
}
