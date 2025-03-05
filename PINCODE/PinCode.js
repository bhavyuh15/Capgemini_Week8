function isValidPinCode(pin) {
    let pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/; // Allows an optional space in the middle
    return pinRegex.test(pin);
}

// Test cases
console.log(isValidPinCode("400088"));   
console.log(isValidPinCode("400 088"));  
console.log(isValidPinCode("40008A"));