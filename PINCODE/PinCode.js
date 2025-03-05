function isValidPinCode(pin) {
    let pinRegex = /^[0-9]{6}$/; // Exact match for 400088
    return pinRegex.test(pin);
}
console.log(isValidPinCode("400088")); 
console.log(isValidPinCode("A40008")); 