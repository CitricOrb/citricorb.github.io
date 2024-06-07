let vid;
let millisMarker;

function setup() {
  createCanvas(windowWidth, windowHeight); // Make the canvas the size of the window
  millisMarker = millis();

  vid = createVideo('vppr.mp4');
  vid.size(windowWidth, windowHeight);
  vid.position(0, 0); // Make sure the video is positioned correctly
}

function draw() {
  background(0); // Clear the background to avoid artifacts
  
  if (millis() - millisMarker > 990) {
    vid.pause();
  }
}

function keyPressed() {
  if (key === ' ') { // Use strict equality for comparison
    millisMarker = millis();
    vid.play();
  }
}
