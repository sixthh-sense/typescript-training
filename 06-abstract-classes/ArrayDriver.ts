import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

// declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

// add theShapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

// error testing
// theShapes.push("will this work?");
// theShapes.push(1776);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log(); // \n도 괜찮음
}