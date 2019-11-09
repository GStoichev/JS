
//import { Vertex } from './Vertex';
var Graph = require("./Graph");

/*Short description:
 *Alorithm is searching for shortest path from vertex A to vertex B,
 if such a path doesn't exist then it shows you proper message.

 *Cost bewteen two vertecies is calculated via Manhatan distance.
 (because I chose to represend each vertex as a point of coordinate system)

 *I chose to use json file for the repesentation of each vertex, because it is
 data in the file more human readable and easy to be modified by non-programer

 */

function main(){
    let graph = new Graph();
    graph.loadGraphFromFile("./Homework_1/Task_1/Graph.json");

    let path = graph.findPath(17,19);
    for(let v of path) {
        console.log(v.id);
    }
}

main();