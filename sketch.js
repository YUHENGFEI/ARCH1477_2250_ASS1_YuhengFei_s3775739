const numStars = 500;
let stars = [];
var CloudPan;
var on = false; //variables for welcoming page
var mode; // mode for Day and Night
let img; //image uploading and insert function
function preload(){
  img1 = loadImage('little_bird_4.png');
  img2 = loadImage('fishing_star_1.png');
  img3 = loadImage('MY_SELF3.jpg');
  img4 = loadImage('SlowFast.png')
}

function setup() {
  
  { //canvas back ground
    createCanvas(800, 600);
}
  
  { //welcoming page mode
//Original place of TEXT FILL
//Original place of TEXT SIZE
  mode = 0;
 }
  
  { //cloud moving fron left to right 
    CloudPan = 0;  
}
  
  //Shooting Stars definition
  for(let i = 0; i < numStars; i ++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  
//circle(x,y,R)
//rect(x,y,width,hight)
//triangle(x1, y1, x2, y2, x3, y3)
//defult fill is white, stroke is black//
  
  clear();
  if (mode == 0) {
    textSize(60);
      fill(255,0,0);
    text("Welcome to My Desert", 75, 150);
    textSize(40);
     fill(255,155,0);
    text("ARCH1477 (2250)", 75, 200);
    textSize(40);
     fill(255,255,0);
    text("Student : Yuheng Fei s3775739", 75, 250);
    textSize(30);
     fill(155,255,0);
    text("Please read through instructions below:", 75, 300);
    textSize(40);
     fill(0,255,155);
    text("Press ENTER to start", 75, 360);
     textSize(30);
     fill(0,155,255);
    text("Click mouse 'L' button now to see author's selfie", 75, 408);
     textSize(20);
     fill(255,0,255);
    text("At Night time,mouse move to left and right to controll shooting star speed", 75, 445);
     textSize(20);
     fill(255,155,155);
    text("At Day time,mouse has a custom brush, a little bird following your mouse", 75, 475);
  }  
  
   //Welcomeing page Selfpic 
  if(mouseIsPressed == true){  
   push();
 translate(mouseX,mouseY);
  image(img3,-150,-200,300,400);
  pop();
  }
  
  if (mode == 1) 
  
   if (on) {
     //background(color of Daytime)
      background(130,200,255);
      drawDaytime();
    } else {
      //background(color of Night)
      background(100,100,150);
      drawNighttime();
    }
}


  function drawDaytime() {
    
    //DAYtime: Sun
  fill(255,220,20);
  noStroke();
  circle(130,120,150);

   //DAYtime: Ground
  fill(255,205,120);
  noStroke();
  rect(0,550,800,50);
    
//Mountains
  //DAYtime: mountain 1
  fill(255,225,150);
  noStroke();
  triangle(50,550,350,550,200,400);
  
    //DAYtime: mountain 2
  fill(255,225,150);
  noStroke();
  triangle(200,550,780,550,500,300);
  
//Mountains shade
  //DAYtime: mountain 1 shade
   fill(255,215,180);
  noStroke();
  triangle(180,550,350,550,200,400);
    
  //DAYtime: mountain 2 shade
   fill(255,215,180);
  noStroke();
  triangle(450,550,780,550,500,300);
    
 {  //Littlebird follow mouseX & Y motion control (Daytime only)
   push();
 translate(mouseX,mouseY);
  image(img1,-200,-100,400,200);
  pop();
}
    
{ //CloudPan function move L to R cycle
  CloudPan = CloudPan + 1;

  if (CloudPan > width + 30) {
  CloudPan = -800;
    }
    
  //translate (CloudPan ,0) Position & Motion
 translate(CloudPan,0);
  
    //Daytime: Mist 1
 fill(255,255,255,40);
 noStroke();
  circle(550,321,150);
  circle(125,400,200);
  circle(350,450,200);
    
    //Daytime: Cloud 1
 fill(255,255,255,50);
 noStroke();
  circle(49,157,70);
  circle(30,180,70);
  circle(50,190,70);
  circle(79,169,70);
  circle(85,195,70);
  circle(112,181,70);
    
   //Daytime: Cloud 3
 fill(255,255,255,50);
 noStroke();
  circle(658, 150, 70);
  circle(673, 174, 75);
  circle(698, 149, 70);
  circle(715, 172, 75);
  circle(636, 177, 70);
  circle(728, 154, 75);
    
    //Daytime: Cloud 2
 fill(255,255,255,50);
 noStroke();
  circle(343, 212, 65);
  circle(348, 188, 75);
  circle(379, 221, 65);
  circle(383, 189, 65);
  circle(413, 215, 75);
  circle(415, 192, 65);
  }
}


  function drawNighttime() {
    
    
    {  //SlowFast sign follow mouseX & Y motion control (Nighttime only)
   push();
 translate(mouseX,mouseY);
  image(img4,-100,-15,200,15);
  pop();
}
    
     //Nighttime: Moon
  fill(255,220,20);
  noStroke();
  circle(650,120,150);  
    
     //Nighttime: Moon Shade
  fill(100,100,150);
  noStroke();
  circle(625,100,150);
    
     //Nighttime: Ground
  fill(200,155,100);
  noStroke();
  rect(0,550,800,50);
    
    //Mountains
  //Nighttime: mountain 1
  fill(205,175,100);
  noStroke();
  triangle(50,550,350,550,200,400);
  
    //Nighttime: mountain 2
  fill(205,175,100);
  noStroke();
  triangle(200,550,780,550,500,300);
  
//Mountains shade
  //Nighttime: mountain 1 shade
   fill(215,195,155);
  noStroke();
  triangle(180,550,350,550,200,400);
    
  //Nighttime: mountain 2 shade
   fill(215,195,155);
  noStroke();
  triangle(450,550,780,550,500,300);
    
    {  //Little boy fishing stars no motion (Nighttime only)
   push();
 translate(530,105);
  image(img2,0,0,150,100);
  pop();
}
 
    // Shooting star function mainbody
    background(0, 0);
  const acc = map(mouseX,0,width,0.005,0.5);
    //0.005 controls the amoung of accleraction
  stars = stars.filter(star => {
    star.draw();
    star.update(acc);
    return star.isActive();
  });
  while(stars.length < numStars) {
    stars.push(new Star(random(width), random(height)));
  }
}
class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.ang = atan2(y - (height/2), x - (width/2));
    //angle of start shooting. if want star go top to bot, change to y-(width), x-(height).
  }
  isActive() {
    return onScreen(this.prevPos.x, this.prevPos.y);
  }
  update(acc) {
    this.vel.x += cos(this.ang) * acc;
    this.vel.y += sin(this.ang) * acc;
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
  draw() {
    const alpha = map(this.vel.mag(), 0, 3, 0, 255);
    stroke(255,225,20, alpha);//change colour of stroke here, Yellow colour now for a better night shooting star feeling.
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}
  

//Mouse function (click swap Daytime & Nighttime)
function mousePressed() {
  on = !on;
}

//welcoming page coding (press ENTER to start)
function keyPressed() {
  if (keyCode == ENTER) {
    mode = 1;
  }
}

//shooting star function
function onScreen(x, y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;  
}