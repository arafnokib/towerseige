const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

   
    bird = new Bird(200,50);
    platform = new Ground(width/2, 300, 450,10)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:250, y:50});
    box1 = new Box(600,100,50,70)
    box2 = new Box(570,100,50,70)

    box3 = new Box(635,100,50,70)

    box4 = new Box(580,100,50,70)

   //box5 = new Box(600,100,50,70)

  //box6 = new Box(600,100,50,70)

}

function draw(){
    background (85)
    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
    box1.display();
    box2.display();

    box3.display();

    box4.display();

   // box5.display();

   // box6.display();


    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    

    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(bird.body)

    }
}