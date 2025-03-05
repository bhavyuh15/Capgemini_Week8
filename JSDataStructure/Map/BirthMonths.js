function generateBirthMonths(numPeople) {
    let birthRecords = new Map();

    for (let i = 1; i <= numPeople; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1; // Random month (1-12)

        // If the month key doesn't exist, initialize it with an empty array
        if (!birthRecords.has(birthMonth)) {
            birthRecords.set(birthMonth, []);
        }
        
        // Add the person to the respective month
        birthRecords.get(birthMonth).push(`Person${i}`);
    }

    return birthRecords;
}

// Generate birth months for 50 individuals
let birthMonthGroups = generateBirthMonths(50);

// Print results
console.log("Individuals grouped by birth month:");
birthMonthGroups.forEach((people, month) => {
    console.log(`Month ${month}:`, people);
});
