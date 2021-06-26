function* generator(){
    console.log("hi")
    console.log("hello")
    yield 8;
    
}
var genera = generator()
var a = genera.next()
console.log(genera)