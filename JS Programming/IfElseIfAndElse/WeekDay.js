function numberToWeekday(num) {
    if (num === 1) return "Sunday";
    else if (num === 2) return "Monday";
    else if (num === 3) return "Tuesday";
    else if (num === 4) return "Wednesday";
    else if (num === 5) return "Thursday";
    else if (num === 6) return "Friday";
    else if (num === 7) return "Saturday";
    else return "Invalid input, enter a number between 1 and 7";
}

// Example usage:
let input = parseInt(prompt("Enter a number (1-7) to get the corresponding weekday: "));
console.log(numberToWeekday(input));
