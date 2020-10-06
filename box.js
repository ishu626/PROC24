class Box {
  constructor(x, y, radius) {
    var options = {
      isStatic:false,
        'restitution':0.8,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    stroke("purple");
    strokeWeight(20);
    fill(255);
    circle(0, 0, this.radius);
    pop();
  }
};
