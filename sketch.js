var boeing717
var boeing727
var darkstar
var f16
var king200
var kingc90
var airbusa320
var airbusa350
var boeing747
var boeing777
var runway




function preload(){
    boeing727=loadImage("boeing727.png")
    boeing717=loadImage("boeing717.png")
    boeing747=loadImage("boeing747-.png")
    boeing777=loadImage("boeing777-9-.png")
    airbusa320=loadImage("airbusa320-.png")
    airbusa350=loadImage("airbusa350.png")
    darkstar=loadImage("darkstar.png")
    fi6=loadImage("f16.png")
    king200=loadImage("king200.png")
    king200=loadImage("kingc90.png")
    runway=loadImage("runway.jpg")
}


function setup(){
    createCanvas(1200,600)
   // back=createSprite(200,200,50,50)
   // back.addImage(boeing717)
     dark=createSprite(570,200,50,50)
    dark.addImage(darkstar)
    dark.velocityY=-1
}
function draw(){
   background(runway)
   drawSprites();
}