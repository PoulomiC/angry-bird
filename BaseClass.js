class BaseClass{
    constructor(x,y,width,height,angle){
        var option  = {
            "restitution": 1.0,
            'friction':0.3, 
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,option); 
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/base.png")
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position
        var angle= this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop()
    }
}