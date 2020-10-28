class Plinko 
{
    constructor(x,y){
        var options = {
            isStatic: true,
            
        }
        this.plinko = Bodies.circle(x,y,8,options);
        this.x = x;
        this.y = y;
       // this.r = r;
        World.add(world, this.plinko);


    }
    display(){
        push();
        var pos =this.plinko.position;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x, pos.y, 8,8);
        pop();
      }
}