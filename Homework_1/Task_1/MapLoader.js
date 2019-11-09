var fs = require('fs');

class MapLoader {

    constructor(){
        this.graphData = null;
    }

    readData(file) {
        let fileBuffer = fs.readFileSync(file);
        this.graphData = JSON.parse(fileBuffer.toString());
    }

    print() {
        console.log(JSON.stringify(this.graphData));
    }
    
}

module.exports = MapLoader;