class Paper{
    constructor(x,y,r){
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
          this.x = x
          this.y = y
          this.r = r
          this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
          World.add(world,this.body);
          
          function KeyDown() {
          if(keyCode === UP_ARROW) {
                Matter.Body.applyFroce(paperObject.body,paperObject.body.position,{x:130,y:-145});
            }
          }

          this.image = loadImage("paper.png");
      
    }
    display(){
            var paperPos=this.body.position;		
            


			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(this.image,0,0,this.r, this.r)
			pop()

    }
}