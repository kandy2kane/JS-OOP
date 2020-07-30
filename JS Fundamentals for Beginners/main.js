let colors = [];
colors.push('red','blue','green','yellow');

// for loops:

for (let i = 0; i<colors.length; i++){
    document.write("color: " + colors[i] + "<br />");
}

// while loops:
let i = 0;
while (i <10) {
    console.log(i);
    i++;
}
console.log("finished while loop")

//foreach loop. 
/*----------------------------------------
Take each item of the array
apply the new function to each item
-----------------------------------------*/
function showAlert(button){
    alert("you selected " + button.getElementById("button"))
}

colors.forEach(function(color){
    console.log(color);
});

let button1=document.getElementById("button1")
let button2=document.getElementById("button2")
// button1.addEventListener("click", showAlert(this));
// button2.addEventListener("click", showAlert(this));


// Switch

let fruit = 'apple';

switch(fruit) {
    case "banana":
        console.log("I hate bananas");
        break;
    case "apple":
        console.log("I love apples");
        break;
    default:
        console.log("I love all fruits");
        break;
}


// objects:

function SecretCode() {
    let secretNum = 78;

    this.guessNum = function(num){
        switch(num) {
            case (num>this.secretNum):
                return "Lower";
                break;
            case (num<this.secretNum):
                return "Higher";
                break;
            case (num==this.secretNum):
                return "You guessed it";
                break;
            // default:
            //     return "Incorrect entry";
            //     break;
        }

    }
}

SecretCode.prototype.getSecret = function(){
    return this.secretNum
}

let secret = new SecretCode();
console.log("Is 70 the number: " + secret.guessNum(70) );


// Objects literals:
let Person = {
    firstName: 'Kane',
    lastName: 'Li',
    children: [
        'Ryan',
        'Katlyn',
        'Riley'
    ],
    address: {
        street: '1313 Mockingbird Ln',
        city: 'Tampa',
        state: 'FL'
    },

    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}


console.log(Person.fullName())

// Create objects as contructor

let apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function() {
    return 'An apple is the color ' + this.color + ' and is the shape ' + apple.shape;
}

console.log(apple.describe());

// constructor pattern
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A ' + this.name + ' is the color ' + this.color + ' and has a shape ' + this.shape;
    }

}

apple = new Fruit('apple', 'red','round');

console.log(apple.shape);
console.log(apple.describe());

//Events
function doClick(id){
    
    
        alert('You Clicked! ' + id.innerHTML + ' your number is ' + rand);
}

function randColor(id){
    let rand = Math.floor((Math.random() * 2) + 1);
    if (rand==1){
        id.color=''
    }
}
//Forms

function changeBackground(id){
    
    
        console.log("you selected " + id.value);
        let body = document.getElementById("body");
        let header = document.getElementById("heading");
        body.style.backgroundColor = id.value;
        header.innerHTML = "You selected " + id.value;
    
}

function validateForm(){
    let firstName = document.forms["myForm"]["firstName"].value;

    
    if (firstName == null || firstName == "") {
        alert("First name is required");
        return false;
    }

    
}