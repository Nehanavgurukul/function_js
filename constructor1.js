// constructor function
function Person () {
    this.name = 'John',
    this.age = 23,

    this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

console.log(person1);  
console.log(person2.age);  