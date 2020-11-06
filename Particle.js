class Particle{
    constructor(x, y){
        var options = {'restitution': 0.4}

        this.body = Bodies.circle(x, y, 15, options);
        this.diameter = 15;
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x, pos.y);
        rotate (angle);
        fill (this.color);
        circle(pos.x, pos.y, this.diameter);
        pop ();
    }
}
