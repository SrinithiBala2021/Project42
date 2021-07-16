var bgImg,issImg,spcraft1Img,spcraft2Img,spcraft3Img,spcraft4Img
var iss,spacecraft
var hasDocked = false
var point

function preload(){
bgImg = loadImage("spacebg.jpg")
issImg = loadImage("iss.png")
spcraft1Img = loadImage("spacecraft1.png")
spcraft2Img = loadImage("spacecraft2.png")
spcraft3Img = loadImage("spacecraft3.png")
spcraft4Img = loadImage("spacecraft4.png")

}
function setup() {
  createCanvas(800,600);
 
  spacecraft = createSprite(370,450,20,20)
  spacecraft.addImage("spacecraft",spcraft1Img)
  spacecraft.scale = 0.3
  //spacecraft.debug = true
  spacecraft.setCollider("rectangle",0,0,230,400)

  iss = createSprite(400, 270, 50, 50);
  iss.addImage("iss",issImg)

 point = createSprite(340,300,10,10)
 point.visible = false
  
}

function draw() {
  background(bgImg);
  
  if(!hasDocked){
  if(keyCode === LEFT_ARROW){
    spacecraft.x = spacecraft.x-1
    spacecraft.addImage("spacecraft3",spcraft3Img)
    spacecraft.changeImage("spacecraft3",spcraft3Img)
    
  }
  if(keyCode === RIGHT_ARROW){
    spacecraft.x = spacecraft.x+1
    spacecraft.addImage("spacecraft4",spcraft4Img)
    spacecraft.changeImage("spacecraft4",spcraft4Img)
  }
  if(keyCode === DOWN_ARROW){
    spacecraft.addImage("spacecraft2",spcraft2Img)
    spacecraft.changeImage("spacecraft2",spcraft2Img)
  }
  if(keyCode === UP_ARROW){
    spacecraft.y = spacecraft.y-1
    spacecraft.addImage("spacecraft",spcraft1Img)
    spacecraft.changeImage("spacecraft",spcraft1Img)
  }
  }
  if(spacecraft.isTouching(point) ){
    hasDocked = true
    fill("white")
    textSize(30)
    text("Docking Successful !!",250,500)


  }
  drawSprites();
}