class Ground {

    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            'restituition' : 0.8,
            'friction' : 0.3,
            'density' : 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        rect(this.x,this.y,this.width,this.height);
    }
}