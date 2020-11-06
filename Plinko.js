class Plinko {
    constructor(x, y){
        var options = {'restitution': 0.4, 'isStatic': true};

        this.body = Bodies.circle(x, y, 10, options);
        this.diameter = 20 ;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill ('white');
        circle(pos.x, pos.y, this.diameter);

        // for(var i = 40; i <= this.trajectory.width; i = i + 50){
        //     circle(this.smokeImage, this.trajectory[i][40], this.trajectory[i][75]);
        // }
    }
}