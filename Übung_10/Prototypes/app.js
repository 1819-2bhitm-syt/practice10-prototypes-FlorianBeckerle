let Square = require("./Square");
let Rectangle = require("./Rectangle");

let figures = [new Square(2), new Square(5), new Square(10), new Rectangle(5, 3), new Rectangle(10, 4)];

for(let figure of figures){
    //Ausgabe der Fläche mithilfe von getArea()
    console.log(figure);
    console.log("Fläche: " + figure.getArea());
    console.log("Fläche: " + figure.getCircumference() + "\n");
}