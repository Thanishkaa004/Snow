
class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'isStatic': false
            
        }
        this.width = 40;
        this.height = 40;
        this.x = random(50, 350);
        this.y = 10;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
        this.Visibility = 255

      }


      display(){
        if(this.body.speed < 7){
         var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
          console.log(this.body.speed);
        }

        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255, this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        }

      }





}
