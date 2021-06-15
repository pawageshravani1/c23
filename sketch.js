const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  ball1=new Ball(200,200,50,40)
  ball=new Ball1(300,200,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    ball1.display()
    ball.display()
    
   
}