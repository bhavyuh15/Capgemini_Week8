function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.[a-zA-Z]+$/

    return regex.test(email);
}

// Test cases
const testEmails = [
    "abc@bridgelabz.co",         // Valid
    "abc.xyz@bridgelabz.co",     // Valid
    "abc@bridgelabz.co.in",      // Valid
    "abc.xyz@bridgelabz.co.in",  // Valid
    "abcd@bridgelabz.co",        // Invalid (should start with abc)
    "abc@xyz.co",                // Invalid (should contain bridgelabz)
    "abc@bridgelabz.com",        // Invalid (should be .co)
    "abc@bridgelabz.co.uk"       // Invalid (only .in is optional)
];

testEmails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});
