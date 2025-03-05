function isValidPinCode(pin) {
    let pinRegex = /^400088$/; // Exact match for 400088
    return pinRegex.test(pin);
}
console.log(isValidPinCode("400088")); 