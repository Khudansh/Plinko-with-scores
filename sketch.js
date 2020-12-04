const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];
var score=0;
var turn=0;
var END=0;
var PLAY=1;
var gameState=PLAY;

var divisionHeight=300;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  Engine.update(engine);
  background("black");
  textSize(30)
  fill("white")
  text("Score:"+score,30,50);
  text("500",20,500);
  text("500",100,500);
  text("500",180,500);
  text("500",260,500);
  text("100",340,500);
  text("100",420,500);
  text("100",500,500);
  text("200",580,500);
  text("200",660,500);
  text("200",740,500);

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60==0){
     particles=new Particle(width/2-30, width/2+30,10);
   }*/
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

if(particle!==null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x<300){
      score=score+500
      if(turn>=5)gameState=END;
    }
  }
}
}

function mousePressed(){
  if(gameState!=="end"){
    particle=new Particle(mouseX,10,10,10); 
  }
}

