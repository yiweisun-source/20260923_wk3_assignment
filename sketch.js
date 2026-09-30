let x,y,d;
let colorPalette = ['#CCFF00','#CCFF66','#CCFF99','#CCFFCC','#CCFFFF','#FFFFFF','#FFFFCC','#FFFF99','#FFFF66','#FFFF00']//10 colors
let numCircles;
let spacing;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = width / 2;;
  y = height / 2;
  d = width / 2;
  numCircles = 10;
  spacing = d/numCircles;
}

function draw() {
  // Set background to black
  background(0);
  d = width / 2;

  for(i = 0; i < numCircles; i++) 
  {
    fill(colorPalette[i])
    circle(x,y,d);
    d = d - spacing;
  }

  
  


}
