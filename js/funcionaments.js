//Colau Sabater Alcolecha 
//EXERCICI 1 - DIBUIXAR

//Aquestes son les variables que he utilitzat a les funcions
let posx = 0;
let posy = 0;
let diam = 0;
let col1 = 0;
let col2 = 0;
let col3 = 0;
let ample = 0;
let altura = 0;
let colBoto = 0;

function setup() {
  let myCanvas1 =  createCanvas(400, 400);
  myCanvas1.parent ('pxx')
  angleMode(DEGREES); //Per facilitar l'�s dels arcs, no utilitzo radiants
}

function draw() {
  background(220);

  //Rectangle que conforma el cap
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(115, 115, 115);
  rect(75, 25, 250, 125, 25, 25, 5, 5);

  //Ombra d'ull blava esquerre
  strokeWeight(10);
  stroke(166, 234, 255);
  fill(255, 0, 0);
  arc(125, 70, 53, 53, 180, 0);

  //Ombra d'ull blava esquerre
  strokeWeight(10);
  stroke(166, 234, 255);
  fill(255, 0, 0);
  arc(275, 70, 53, 53, 180, 0);

  //Pels ulls, he utilitzat la funci� ulls. De l'enunciat B�sic e.
  //Ull esquerra
  strokeWeight(2);
  stroke(0, 0, 0);
  posx = 125;
  posy = 70;
  diam = 10;
  col1 = color(255, 255, 255);
  col2 = color(84, 174, 222);
  col3 = color(0, 0, 0);
  ulls(posx, posy, diam, col1, col2, col3);

  //Ull dret
  posx = 275;
  posy = 70;
  diam = 10;
  col1 = color(255, 255, 255);
  col2 = color(84, 174, 222);
  col3 = color(0, 0, 0);
  ulls(posx, posy, diam, col1, col2, col3);

  // Boca
  fill(255, 255, 255);
  arc(200, 150, 130, 120, 180, 0);
  line(135, 150, 275, 150); //linea d'abaix de les dents que sin� desapareixia la linia separatoria del coll

  //Les l�nies divisories entre dents es componen d'un beginShape. Enunciat Avan�at 1
  //Dents
  beginShape(LINES);
  vertex(200, 150);
  vertex(200, 90);
  vertex(175, 95);
  vertex(175, 150);
  vertex(225, 95);
  vertex(225, 150);
  vertex(150, 110);
  vertex(150, 150);
  vertex(250, 110);
  vertex(250, 150);
  endShape();

  //Rectangle gris clar que fa de coll i de torso
  fill(200, 200, 200);
  rect(145, 150, 110, 150);

  //Rectangle gris fosc que fa de tronc superior
  fill(115, 115, 115);
  rect(125, 165, 150, 60);

  //Rectangle gris fosc que fa de tronc inferior
  fill(115, 115, 115);
  rect(105, 240, 190, 75);

  //Rectangle gris clar que fa de cama esquerra
  fill(200, 200, 200);
  rect(130, 315, 45, 30);
  fill(115, 115, 115);
  quad(130, 345, 175, 345, 195, 400, 110, 400);

  //Rectangle gris clar que fa de cama dreta
  fill(200, 200, 200);
  rect(225, 315, 40, 30);
  fill(115, 115, 115);
  quad(225, 345, 265, 345, 285, 400, 205, 400);

  //Pajarita
  //La podria haver fet amb dos triangles(), per� volia experimentar aixi
  fill(0, 115, 255);
  beginShape(TRIANGLES);
  vertex(200, 155);
  vertex(250, 140);
  vertex(240, 165);
  vertex(200, 155);
  vertex(150, 140);
  vertex(160, 165);
  endShape();
  ellipse(200, 155, 30, 25); //Ellipse que es situa enmig de la pajarita

  fill(115);
  //Rectangle gris fosc que fa de bra� esquerre
  rect(75, 175, 50, 30);
  //Rectangle gris fosc que fa de bra� dret

  rect(275, 175, 50, 30);
  fill(255);
  //Cercle blanc que fa de m� esquerra
  circle(65, 190, 50);
  //Cercle blanc que fa de m� dreta
  circle(335, 190, 50);

  //Botons
  //He utilitzat una funci� que permet el canvi de posici�, mida i colors dels botons. De l'enunciat Avan�at "b".

  //Bot� superior
  posx = 200;
  posy = 180;
  ample = 20;
  colBoto = color(186, 227, 255);
  strokeWeight(1);
  botons(posx, posy, ample, colBoto);

  //Bot� mitj superior
  posx = 200;
  posy = 210;
  ample = 25;
  colBoto = color(124, 200, 252);
  botons(posx, posy, ample, colBoto);

  //Bot� mitj inferior
  posx = 200;
  posy = 258;
  ample = 29;
  colBoto = color(0, 151, 255);
  botons(posx, posy, ample, colBoto);

  //Bot� inferior
  posx = 200;
  posy = 295;
  ample = 37;
  colBoto = color(0, 113, 191);
  botons(posx, posy, ample, colBoto);
}

function ulls(posx, posy, diam, col1, col2, col3) {
  //Blanc de l'ull
  fill(col1);
  circle(posx, posy, diam + 45);
  //Color de l'ull
  fill(col2);
  circle(posx, posy, diam + 20);
  //Pupila
  fill(col3);
  circle(posx, posy, diam + 5);
}

function botons(posx, posy, ample, colBoto) {
  fill(colBoto);
  circle(posx, posy, ample);
  circle(posx, posy, ample / 1.35);
  circle(posx, posy, ample / 2);
  circle(posx, posy, ample / 4);
}
