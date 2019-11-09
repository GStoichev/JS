//export 

var Point = require("./Point");

class Vertex {

    constructor(id, point, name, neighbours) {
        this.id = id;
        this.point = new Point(point.x, point.y);
        this.name = name; //string
        this.neighbours = neighbours; //number[]
        
    }

    print() {
        console.log(`id : ${this.id} \npoint : x : ${this.point.x} y : ${this.point.y} \nname : ${this.name} \nneighbours : ${this.neighbours}`);
    }
   
}

module.exports = Vertex;