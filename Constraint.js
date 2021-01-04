class Cons {

    constructor (body1, body2) {

    var options = {

     bodyA: body1, 
     bodyB: body2,
     length: 120,
     stiffness: 0.02

    }
    
    this.cons= Constraint.create(options)
    World.add (world, this.cons)




}

display (){

var point1 = this.cons.bodyA.position
var point2 = this.cons.bodyB.position

push ()
strokeWeight(3)
line(point1.x, point1.y, point2.x, point2.y)
pop ()

}


}