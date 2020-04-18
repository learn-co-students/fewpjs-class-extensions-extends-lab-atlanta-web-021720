// Your code here
class Polygon {
    constructor(sidesArr) {
        this.sidesArr = sidesArr
    }

    get countSides() {
        let total = 0
        this.sidesArr.forEach(() => {
            total++
        })
        return total
    }

    get perimeter() {
        let total = 0
        this.sidesArr.forEach(side => {
            total += side
        })
        return total
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sidesArr)) return;
        if (this.sidesArr.length !== 3) return;
        let side1 = this.sidesArr[0]
        let side2 = this.sidesArr[1]
        let side3 = this.sidesArr[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    
    get isValid() {
        if (!Array.isArray(this.sidesArr)) return;
        if (this.sidesArr.length !== 4) return;
        let side1 = this.sidesArr[0]
        let side2 = this.sidesArr[1]
        let side3 = this.sidesArr[2]
        let side4 = this.sidesArr[3]
        return (
            (side1 === side2) && 
            (side1 === side3) && 
            (side1 === side4) && 
            (side2 === side3) &&
            (side3 === side4)
            )
    }

    get area() {
        if(this.isValid) {
            return this.sidesArr[0] * this.sidesArr[1]
        }
    }
}