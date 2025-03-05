function randomdigit(){
    return Math.floor(Math.random()*9000)+1000;
}
let n = randomdigit();

if(n % 400 == 0 || (n % 100 !=0 && n % 4 == 0)){
    console.log(n," is a leap year")
}
else{
    console.log(n," is not a leap year")
}