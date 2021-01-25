class Stone {
  constructor(x,y){
      var options={
          'density': 2,
          'friction':1,
          'restitution':0.8,
        
        
      } 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 50;
      this.height = 50;

      World.add(world,this.body)    
  }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
     fill(255);
     strokeWeight(3);
     stroke('green');
    rect(pos.x,pos.y,this.width,this.height);
    pop();
}
}  