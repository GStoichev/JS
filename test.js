var Unit = require("./unit.js");
var Battle = require("./battle.js");

//import "Unit.js"
//import { Battle } from "./Battle";


function Archer() {
    
}

function Knight() {
}

function main() {
    //let testUnit = new Object.create(Unit);
    let testUnitt = new Unit("John Doe", 1, 0 , 50, 1, "bare hands");
    let testUnit = new Unit("Spear man", 10, 5, 55, 3, "spear");
    let testBattle = new Battle(testUnitt,testUnit);
    testBattle.Start()
}

main();