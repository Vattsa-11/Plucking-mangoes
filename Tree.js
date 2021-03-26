class Tree {

    constructor(){
         var options = {
            isStatic : true,
            'restituition' : 0.3,
            'friction' : 0.1,
            'density' : 0.5
         }
        this.image = loadImage("Plucking mangoes/tree.png"); 
        this.body = Bodies.rectangle(650,300,700,700,options);

        World.add(world,this.body);
    } 

    display(){
        rectMode(CENTER);
        image(this.image,575,360,700,700);
    }   
}