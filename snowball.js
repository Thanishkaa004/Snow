class Snowball{
    constructor(x,y){
        var options = {
            'restitution':1,
            'isStatic': false
        }

        this.r = 24;
        this.body = Bodies.circle(x, y, this.r)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle; 

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0, this.r, this.r);
        pop();
    }
}