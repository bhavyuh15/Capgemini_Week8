function isValidPinCode(pin) {
    let pinRegex = /^[0-9]{6}$/; // Ensures exactly 6 digits, no alphabets or special characters
    return pinRegex.test(pin) 
}

// Test cases
console.log(isValidPinCode("400088"));  
console.log(isValidPinCode("A400088")); 
console.log(isValidPinCode("400088B")); 
