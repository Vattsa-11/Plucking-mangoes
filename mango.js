class Mango {

     constructor(x,y){
        var options = {
            isStatic : true,
            'restitution' : 0,
            'friction' : 1
        }
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(x,y,40,options);
        this.x = x;
        this.y = y;
        this.radius = 40;

        World.add(world,this.body);
     }
     display(){
        if(this.body.speed < 3){
            var pos =this.body.position;
            var angle = this.body.angle;
            console.log(this.body.speed);
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            fill(255);
            //strokeWeight(4);
            //stroke("color");  
            image(this.image,0,0,this.radius,this.radius);
            pop();
            }else {
              //World.remove(world,this.body);
              push ();
              //this.visibility = this.visibility-5;
              //tint (255,this.visibility);
              var options = {
                isStatic : true,
                'restitution' : 0,
                'friction' : 1
              }
              image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
              pop ();
            }
     }
      
}