var Vertex = require("./Vertex.js");
var Point = require("./Point");
var MapLoader = require("./MapLoader");

class Graph{

    constructor(){
        this.verticesMap = new Map();
    }

    loadGraphFromFile(file) {
        this.clearGraph();
        let mapLoader = new MapLoader();
        mapLoader.readData(file);

        let JSONvertices = mapLoader.graphData.Graph.Vertices; 
        for(let JSONVertexData of JSONvertices) {
            let JSONVertex = JSONVertexData.Vertex;
            let id = JSONVertex.id;
            let x = JSONVertex.x;
            let y = JSONVertex.y;
            let name = JSONVertex.name;
            let neighbours = JSONVertex.neighbours;
            let point = new Point(x,y);
            let vertex = new Vertex(id, point, name, neighbours);
            this.verticesMap.set(id,vertex);
        }
    }

    clearGraph(){
        this.verticesMap.clear();
    }

    extractFinalPath(start, destination, prev) {
        let path = [];
        let current = destination;
        while(current != start) {
            let currentVertex = this.verticesMap.get(current);
            path.unshift(currentVertex);
            current = prev.get(current)
        }
        let startingVertex = this.verticesMap.get(current);
        path.unshift(startingVertex);

        return path;
    }

    manhatanDistance(fromVertexId, toVertexId) {
        let fromVertex = this.verticesMap.get(fromVertexId);
        let toVertex = this.verticesMap.get(toVertexId);
        let distance = fromVertex.point.difference(toVertex.point);
        return Math.abs(distance.x) + Math.abs(distance.y);
    }

    findVertexWithMinDest(queue, dist) {
        let min =  Number.MAX_SAFE_INTEGER;
        let minDestVertex =  Number.MAX_SAFE_INTEGER;
        for(let id of queue) {
            if(min > dist.get(id)) {
                minDestVertex = id;
                min = dist.get(id);
            }
        }
        return minDestVertex;
    }

    findPath(start, destination) {
        let dist = new Map();
        let prev = new Map();
        let queue = [];

        let startingVertex = this.verticesMap.get(start); // if exists
        if(!startingVertex){
            return;
        }
        

        for(let [key,value] of this.verticesMap) {
            let vId = value.id;
            dist.set(vId, Number.MAX_SAFE_INTEGER);
            prev.set(vId,undefined);
            queue.push(vId);
        }
        dist.set(start,0);

        while(queue.length != 0) {
            let u = this.findVertexWithMinDest(queue, dist);
            if(u == destination)
            {
                let path = this.extractFinalPath(start, destination , prev);
                return path;
            }
            let index = queue.indexOf(u);
            if (index > -1) {
                queue.splice(index, 1);
            }
            let vertex = this.verticesMap.get(u);
            let allNeighbours = vertex.neighbours;
            let neighbours = allNeighbours.filter((value,index,array) => {
                return queue.find((value2,index,queue) => { return value == value2});
            })
            for(let neighbour of neighbours) {
                let altitude = dist.get(u) + this.manhatanDistance(u, neighbour);
                if(altitude < dist.get(neighbour)) {
                    dist.set(neighbour,altitude);
                    prev.set(neighbour,u);
                }
            }
        }
    }
}

module.exports = Graph;