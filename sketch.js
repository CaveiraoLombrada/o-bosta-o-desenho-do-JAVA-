function setup() {
  createCanvas(1000, 800);
  background("black");
}

function draw() {
  fill("pink");
  stroke("rgb(255,255,255) ");
  if(mouseIsPressed){
  circle(mouseX, mouseY, 30);
}
}
