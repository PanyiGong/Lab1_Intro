function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  
  
  fill(157,193,131)
  rect(0,400,600,200)
  noStroke();  
  //head and neck------------------------------------------
  fill(255,235,238)
  ellipse(350,100,100,125);
  rect(330,150,50,50);
     
    fill(53,94,59);
  stroke(20)
  point(320,90);
  
  //body------------------------------------------------
  fill(197,202,233)
  noStroke();
  quad(315,200,390,200,340,400,240,400);
  
  //the planting leg----------------------------
  fill(255,235,238)
  quad(200,350,
       250,350,
      200,500,
      150,500);

  
  fill(255,255,255)
  quad(225,350,
       350,350,
       350,400,
      225,425);
  
  fill(130,121,78)
  circle(100,500,75)
  
  //the kicking leg--------------------------------------
  fill(255,235,238)
  rect(400,425,100,50)
  
  fill(255,255,255)
  quad(275,350,
       350,350,
       450,400,
       400,475);
  //shoes
  fill("#fda50f" );
  square(150,500,50);
  triangle(60,550,150,500,150,550);
  
  square(500,425,50)
  triangle(500,475,550,475,550,490)
  
  fill(255,244,79);
  circle(525,450,20)
  arc(200,525,20,20,HALF_PI,PI + HALF_PI);
  
  stroke(525,450,20)
  strokeWeight(3)
  line(199,500,199,525)
  
  stroke(525,450,20)
  strokeWeight(7)
  line(500,450,525,450)
  
  //arms
  noStroke();
   fill(255,235,238)
  quad(275,250,275,275,
       325,255,325,230)
  rect(275,250,-100,25)
  quad(425,280,
    425,250,
    500,300,
    500,330)
  //the sleeves
  fill(57,73,171)
  quad(390,200,
      375,250,
      425,280,
      425,230)
  quad(300,220,
       350,200,
       350,250,
       300,270);


}
  