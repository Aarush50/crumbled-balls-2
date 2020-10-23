class Papper{
    constructor(x,y,r){
        var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':0.8
        }
        this.x=x;
        this.y=y;
        this.image=loadImage("paper.png");
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     //fill("red");
     //circle(0,0,this.r);
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
     pop();
    }
}