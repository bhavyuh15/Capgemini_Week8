function randomdigit(){
    return Math.floor(Math.random()*900)+100;
}

let numbers = Array.from({length : 5}, () => randomdigit());

console.log("Random numbers " , numbers);
 
let min = numbers[0];
let max = numbers[0];

for(let i = 0; i<numbers.length;i++){
    if (numbers[i]<min){
        min = numbers[i]; 
    }
    if(numbers[i]>max){
        max = numbers[i];
    }
}
console.log("The minimum value is ", min)
console.log("The maximum value is ", max)