function* myfun(){
    return "neha"                           // with return 
}
var call = myfun();
console.log(call.next())


function* myfun(){
    console.log("neha")                      // with console.log()
}
var call = myfun();
console.log(call.next())


function* myfun(){
    yield 1
    yield 2 
    return 3                                  // with yield
}
var call = myfun();
console.log(call.next())
console.log(call.next())
console.log(call.next())


function* myfun(){
    var i = 0 
    while(i<4){
        yield i++
    }
    return 5                                               // with yield
}
var call = myfun();
console.log(call.next())        
console.log(call.next())
console.log(call.next())
console.log(call.next())
console.log(call.next())


function* myfun(){
        yield "sona"
        yield "mona"
        return "khona"                                 // with yield
    }
var call = myfun();
console.log(call.next())
console.log(call.next())
console.log(call.next())

