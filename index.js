class Polygon {
    constructor(arr) {
        this.sides = arr;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        if (this.countSides > 0){
            let sum = 0;
            for (let int of this.sides) {
                sum += int
            }
            return sum
        }
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        if( (a + b) > c && (a + c) > b && (b + c) > a){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() { 
        if(this.countSides === 4) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
            return ((a === b) && (a === c) && (a === d))
        }
    }

    get area() {
      return this.sides[0] * this.sides[0]
    }
}