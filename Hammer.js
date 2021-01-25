class Hammer {
  constructor(x,y) {
    var options = {
        'density': 2,
        'friction': 1.0,
        'restitution': 0.5,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 100;
    this.height = 50;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY
    

    push();
    translate(pos.x,pos.y);
    
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
    
  }
};