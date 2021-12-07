
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let circleBgcolor = {r: 223, g: 255, b:11};


function circleColor() {
  circleBgcolor.r = random(0, 223);
  circleBgcolor.g = random(0, 255);
  circleBgcolor.b = random(0, 11);
}


function draw() {
  noFill();
  stroke(circleBgcolor.r,circleBgcolor.g,circleBgcolor.b);
  ellipse(mouseX, mouseY, 90, 90);
}

function mousePressed() {
  clear();
  circleColor();
}