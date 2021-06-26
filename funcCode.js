
// function func1(){
//     setTimeout(()=>{
//       console.log(x,"aaa");
//       console.log(y,"bbbb");
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
  
//   func1();
  
//   // Code 2:
  
//   function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i,"cccc"),2000);
//   }
  
//   }
  
//   func2();
  
  
//   // Code 3:
  
  
//   (function(){
//     setTimeout(()=> console.log(1,"dddd"),2000);
//     console.log(2,"eee");
//     setTimeout(()=> console.log(3,"ffff"),0);
//     console.log(4,"gggg");
//   })();




let x= {}, y = {name:"Ronny"},z = {name:"John"};

x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};

console.log(x[y]);

function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
  }
  
runFunc();


let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));



// var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})();

