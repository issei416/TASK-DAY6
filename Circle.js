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
        return area.toFixed(2);
    }
    getCircumfrence(){
        let circ = 2 * 3.14 * this.radius;
        return circ.toFixed(2);
    }
}

let circle1 = new Circle();
console.log(circle1.toString());
console.log("radius: ",circle1.getRadius());
console.log("color: ",circle1.getColor());
console.log("circumfrence: ",circle1.getCircumfrence());
console.log("Area: ",circle1.getArea());
console.log()
circle1.setRadius(2.5);
circle1.setColor("green");
console.log(circle1.toString());
console.log("radius: ",circle1.getRadius());
console.log("color: ",circle1.getColor());
console.log("circumfrence: ",circle1.getCircumfrence());
console.log("Area: ",circle1.getArea());
console.log()

let circle2 = new Circle(12.7,"black");
console.log(circle2.toString());
console.log("radius: ",circle2.getRadius());
console.log("color: ",circle2.getColor());
console.log("circumfrence: ",circle2.getCircumfrence());
console.log("Area: ",circle2.getArea());
console.log()

circle2.setRadius(25);
circle2.setColor("yellow");
console.log(circle1.toString());
console.log("radius: ",circle2.getRadius());
console.log("color: ",circle2.getColor());
console.log("circumfrence: ",circle2.getCircumfrence());
console.log("Area: ",circle2.getArea());
