class Food{
    constructor(){
   
        this.foodstock=0 
    this.emptybottle=loadImage("images/milkImage.png");
    this.fullbottle=loadImage("images/Milk.png");   
    }
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFood(){

    }
    display(){
        var x=80,y=100;

        imageMode(CENTER);
image(this.image,720,220,70,70);


if(this.foodStock!=0){

for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
        x=80;
        y=y+50;
    }
    image(this.fullbottle,x,y,50,50)
    x=x+30;
}
}
   
}
}