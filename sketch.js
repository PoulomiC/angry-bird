const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3,box4,box5,ground1,pig1,pig2,log1,log2,bird1;
var backgroundImg;
function preload(){
    backgroundImg=loadImage("sprites/bg.png");
}
function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new ground(600,height,1200,20);
    box1=new box(700,320,70,70);
    box2=new box(920,320,70,70);
    box3=new box(700,240,70,70);
    box4=new box(920,240,70,70);
    box5=new box(810,160,70,70);
    log1=new log(810,260,300,PI/2);
    log2=new log(810,180,300,PI/2);
    pig1=new pig(810,360);
    pig2=new pig(810,220);
    bird1=new bird(200,200);
    //log3=new log()
    //log4=new log()
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    ground1.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    log1.display()
    log2.display()
    pig1.display()
    pig2.display()
    bird1.display()
}
    
    



