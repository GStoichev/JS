class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    difference(otherPoint) {
        return new Point(this.x - otherPoint.x, this.y - otherPoint.y);
    }
}

module.exports = Point;