class Ball1{
  constructor(x,y,width,height) {
      var options={
        isstatic:true 
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
    World.add(world,this.body)
  }
display(){
  
    var pos=this.body.position
    var angle=this.body.angle

    push()
    translate (pos.x,pos.y)
    rectMode(CENTER)
    fill ("pink")
    rect(0,0,this.width,this.height)
    pop ();


}

}