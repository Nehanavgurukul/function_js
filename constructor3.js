// constructor function
function Person (person_name, person_age, person_gender) {
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 
 // creating objects
 const person1 = new Person('Rohit', 23, 'male');
 const person2 = new Person('Neha', 25, 'female');
 

 console.log(person1); 
 console.log(person2.name); 