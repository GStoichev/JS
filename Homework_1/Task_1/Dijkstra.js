
//import { Vertex } from './Vertex';
var Graph = require("./Graph");

function main(){
    let graph = new Graph();
    graph.loadGraphFromFile("./Dijkstra/Graph.json");

    let path = graph.findPath(17,20);
    for(let v of path) {
        console.log(v.id);
    }
}

main();