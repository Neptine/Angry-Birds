class Log extends BaseClass {
    constructor(x, y, height, angle) {
     super(x,y,height,angle);
     this.image=loadImage('sprites/wood2.png');
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  