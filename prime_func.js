// Make isPrimeNumber function. It should retutn an input is prime number or not.
// What is arrow function with 5 examples?

isPrime(13)
function isPrime(x){
    if(x>1){
        var i=2
        while(i<x){
            if(x%i==0){
              return ("not prime")
            }i++
        }
        else{
            return ("yes prime")
        }
    }else{
        return ("not prime")
    }
}




// function prime(num) {
//     var i=2;
//     while (i<num){
//         if (num%2==0){
//             console.log("not prime",num);
//             break
//         }else{
//             console.log("prime",num);
//             break
//         }
//         i++;
//     }
// }
// prime(9);