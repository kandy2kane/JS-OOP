// Literal Object
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    draw: function() {
        console.log('draw circle 1');
    }
};

console.log(circle.draw())
console.log('This is location ' + circle.location.x)

// factory function

function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw circle 2');
        }
    }
}

const circle2 = createCircle(1);
circle2.draw();

//Constructor function
function Circle(radius) {
    this.radius = radius;

    this.draw = function(){
        console.log('draw circle 3');
    }

    this.area = function(){
        return this.radius * 3.14
    }

}

const circle3 = new Circle(1)
circle3.radius = 10;
console.log('The area of circle3 is ' + circle3.area());

// Another example

const Circle2 = new Function ('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw Circle 2');
}
`);

const anotherCircle = new Circle2(1)

// Call Method
Circle.call({/*an object */}, 1)
Circle.apply({/*an object */}, [1,2,3])

// Example on variables

let x = {value: 10};
let y = x;
x.value = 20;

// Example function

let number = 10;
function increase(number) {
    number++;
    console.log('in function number is ' + number)
}

increase(number);
console.log(number)

// Example function

let obj = {value: 10};

function increase2(obj) {
    obj.value++;
}
increase2(obj);
console.log('after incrase ' + obj.value);

// Example object

const circle4 = new Circle(10);
circle4.location = { x: 1 };

// Can add a new property to an existing object on the fly
const propertyName = 'center location';
circle4[propertyName] = {x:1};
circle4.newFunction = function() {
    newfuncProp = 5;
    console.log('this is a new function');
};

// For loop

for (let key in circle4) {
    if (typeof circle4[key] != 'function')
        console.log('this is a function ' + key, circle4[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) 
    console.log('Circle has a radius.');

// abstraction

function Circle5(radius) {
    // only within this function
    let localColor = 'red';

    this.radius = radius;

    // this should be private
    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    // This should be private
    let computeOptimumLocation = function() {
        // pass
    }

    this.draw = function() {
        computeOptimumLocation();
        console.log('draw circle');
    };

    // sets a property name as read only without calling getter function
    Object.defineProperty(this, 'defaultLocation',{
        get: function() {
            return defaultLocation;
        },

        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location format. expecting {x: value, y: value}');
            defaultLocation = value;
        }
    });

}

const circle5 = new Circle5(10);
console.log(circle5.localColor); // will not work since it's private
console.log(circle5.getDefaultLocation()); // this calls the getter
console.log(circle5.defaultLocation);
console.log(circle.defaultLocation=5);


