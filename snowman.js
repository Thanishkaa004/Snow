class Snowman{
    constructor(x,y) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic: true
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 180;
        this.height = 180;
        World.add(world, this.body);
        this.visibility = 255;
        this.image = loadImage("snowman.png");
        
      }
      display(){

        image(this.image, this.body.position.x, this.body.position.y, 180, 180);

      }
}
