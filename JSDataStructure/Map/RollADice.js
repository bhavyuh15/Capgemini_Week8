function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
}

function simulateDiceRolls() {
    let diceRolls = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
    let maxCount = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        diceRolls.set(roll, diceRolls.get(roll) + 1); // Increment count

        // Check if any number has reached max count
        if (diceRolls.get(roll) === maxCount) {
            reachedMax = true;
        }
    }

    console.log("Dice Roll Counts:", Object.fromEntries(diceRolls));

    // Find the number that occurred the most and the least
    let maxNum = null, minNum = null;
    let maxOccurrence = 0, minOccurrence = Infinity;

    diceRolls.forEach((count, num) => {
        if (count > maxOccurrence) {
            maxOccurrence = count;
            maxNum = num;
        }
        if (count < minOccurrence) {
            minOccurrence = count;
            minNum = num;
        }
    });

    console.log(`Number that reached maximum times: ${maxNum} (${maxOccurrence} times)`);
    console.log(`Number that appeared minimum times: ${minNum} (${minOccurrence} times)`);
}

// Run the simulation
simulateDiceRolls();
