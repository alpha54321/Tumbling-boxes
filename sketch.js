const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1,box2;

function setup()
{
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,10);
    console.log(ground);
    box1 = new boxes(150,100,20,80);
    box2 = new boxes(160,50,100,20);
}

function draw()
{
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
}