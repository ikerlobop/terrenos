let start = 0;
let velocidad = 0.05;


function setup() {
  createCanvas(800, 400); 
  noCursor();
  cursor(CROSS);  
  
}

function draw() {
  //colores de fondo, borde y relleno
  background(135, 206, 235);
  stroke(0);
  fill(34, 139, 34); 
  circle(mouseX, mouseY, 10);
  beginShape();  
  
  let xoff = start;
  for (let x = 0; x < width; x++) {
    let y = map(noise(xoff), 0, 2, height / 2, height);  
    vertex(x, y);  
    xoff += 0.04;  
  }

  start += 0.05;  
  vertex(width, height);  
  vertex(0, height);  
  endShape(CLOSE);
}
