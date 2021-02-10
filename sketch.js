const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var bg,score=0

var gameState = "onSling";

function preload() {
    
   gettime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1=new box(300,275,30,40);
    box2=new box(330,275,30,40);
    box3=new box(360,275,30,40);
    box4=new box(390,275,30,40);
    box5=new box(420,275,30,40);
    box6=new box(460,275,30,40);
    box7=new box(480,275,30,40);

    box8 = new box(330,235,30,40);
    box9 = new box(360,235,30,40);
    box10=new box(390,235,30,40);
    b0x11=new box(420,235,30,40);
    box12=new box(450,235,30,40);
    box13=new box(360,195,30,40);
    b0x14=new box(390,195,30,40);
    box15=new box(420,195,30,40);
    box16=new box(390,155,30,40);
}

function draw(){
    if(bg)
    background(bg);
    noStroke()
    textSize(30)
    fill("white");
    text("score"+score,900,50);
    Engine.update(engine);
    //strokeWeight(4);
    //log6.display();
    slingshot.display();   
    box1.display();
    box2.display(); 
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  //  }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50})
       slingshot.attach(bird.body);
    }
}

async function gettime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    var daytime=await responseJSON.datetime
    var hour=daytime.slice(11,13)
    if (hour>06 && hour<18){
        bg=loadImage("sprites/bg.png")
    }
     else{
         bg=loadImage("sprites/bg2.jpg")
     }
}
