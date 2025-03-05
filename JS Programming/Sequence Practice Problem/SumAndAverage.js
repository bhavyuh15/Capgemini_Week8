function random2digit(){
   return Math.floor(Math.random()*90)+10;
}
let n1 = random2digit();
let n2 = random2digit();

console.log("the two numbers are " + n1 + " and " + n2)
console.log("the sum of two number is " + (n1+n2))
console.log("the average of two numbers is " + (n1+n2)/2)