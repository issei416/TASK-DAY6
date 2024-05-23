class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = Number(radius);
        this.color = color;
    }
    setRadius(r){
        this.radius = Number(r);
    }
    setColor(c){
        this.color = c;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea(){
        let area = 3.14 * Math.pow(this.radius,2);
        return area;
    }
    getCircumfrence(){
        let circ = 2 * 3.14 * this.radius;
        return circ;
    }
}

let circle1 = new Circle();
console.log(circle1.toString(),circle1.getArea());