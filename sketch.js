var dog,sadDog,happyDog,milk,database,foodStock;
var feed,addFood,food;
var foodObj;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
milk=loadImage("images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20);
foodObj=new Food();
feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feeddog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    feeddog(food);
  
  }
  drawSprites();
foodObj.display();
}

//function to read food Stock
function readStock(data){
  food=data.val();

}

//function to update food stock and last fed time
function feeddog(x){
  dog.addImage(happyDog);
if(x<=0){
  x=0;
}else{
  x=x-1;
}
database.ref('/').update({
  food:x
})
}

//function to add food in stock
function addFoods(){
  food++;
  database.ref('/').update({
    food:food
  })
}