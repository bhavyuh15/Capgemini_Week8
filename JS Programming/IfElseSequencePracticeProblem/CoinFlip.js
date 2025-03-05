function randomdigit(){
    return Math.floor(Math.random()*2);
}
let n = randomdigit();

if (n==1){
    console.log("Heads")
}
else{
    console.log("Tails")
}
console.log(n)