
// Poor way
console.log("Hello World Kane")
console.log("Hello World Ryan")

// old way
function person(name, color){
    console.log("Hello World " + name + " and my favorite color is " + color);
}

let name = "Kane";
let color = "Blue";

person(name, color);
person("Ryan","Red");

// Better

let kane = {
    name: "Kane",
    color: "Blue"
}

person(kane.name, kane.color)

// even better

kane = {
    name: "Kane",
    color: "Blue",
    
    greet: function () {
        console.log("Oh Hello there! \nmy name is " + name + " my favorite color is " + color);
    }
}

kane.greet();

// Best
function Person(fullName, favColor) {
    this.name=fullName;
    this.favColor=favColor;

    this.greet = function() {
        console.log("Hello there. My name is " + this.name + " my favorite color is " + favColor);
    }
}

kane = new Person("Kane","Blue");
ryan = new Person("Ryan","Red");

kane.greet();
ryan.greet();


// Modern new way
class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favColor = favColor;

        this.greet = function () {
            console.log("Hello there. My name is " + this.name + " my favorite color is " + favColor);
        };
    }
}


kane = new Person("Kane","Blue");
ryan = new Person("Ryan","Red");

kane.greet();
ryan.greet();