
const args = process.argv.slice(2); 

if (args.length !== 2) {
    console.log("Usage: node seasonCheck.js <day> <month>");
    process.exit(1);
}


let day = parseInt(args[0]);
let month = parseInt(args[1]);


if (isNaN(day) || isNaN(month) || day < 1 || month < 1 || month > 12) {
    console.log("Invalid input. Please enter a valid day (1-31) and month (1-12).");
    process.exit(1);
}


let isInSpringSeason = 
    (month === 3 && day >= 20) ||  
    (month > 3 && month < 6) ||    
    (month === 6 && day <= 20);    

console.log(isInSpringSeason);
