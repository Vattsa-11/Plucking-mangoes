class Stone {

    constructor(x,y){
        var options = {
            'restituition' : 0.7 ,
            'friction' : 0.1 ,
            'density' : 0.5 
        }
        this.body = Bodies.circle(x,y,35,options);
        this.radius = 35;
        this.image = loadImage("Plucking mangoes/stone.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push(); 
        translate(pos.x,pos.y); 
        rotate(angle);
        imageMode(CENTER); 
        image(this.image,0,0,this.radius,this.radius);
        pop(); 
    }
}