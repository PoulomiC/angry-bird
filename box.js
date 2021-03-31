class box{
    constructor(x,y,width,height){
        var option  = {
            "restitution": 1.0,
            'friction':0.3, 
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option); 
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position
        var angle= this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("green")
        fill(255)
        rect(pos.x, pos.y, this.width, this.height);
        pop()
    }
}