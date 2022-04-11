function setup() {
  createCanvas(1000, 1000);
  background(230, 230, 255);
}

function draw() {
  stroke("black");
  strokeWeight(1);
  noFill();
  ellipse(mouseX, mouseY, 200, 200);
}
	

function mousePressed() {
 noStroke();
  randR = round(random([0], [255]));
  randG = round(random([0], [255]));
  randB = round(random([0], [255]));
 fill(randR, randG, randB );
 ellipse(mouseX, mouseY, 200, 200);
}