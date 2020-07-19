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

