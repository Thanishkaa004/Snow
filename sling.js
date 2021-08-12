class Sling{
    constructor(){
        var options = {

        }
        
        slingshotImg = loadImage("slingshot.png");
        this.x =  850;
        this.y = 250;
        this.width = 250;
        this.height = 300; 
        this.sling = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.sling);


    }
    display(){
    
    imageMode(CENTER);
    image(slingshotImg, this.x, this.y, this.width, this.height);


}


}











