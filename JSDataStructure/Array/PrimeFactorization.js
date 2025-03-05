function getPrimeFactors(n) {
    let factors = []; // Array to store prime factors
    let num = n;

    // Check for divisibility by 2
    while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }

    // If num is still greater than 2, it's prime
    if (num > 2) {
        factors.push(num);
    }

    return factors;
}

// Example Usage
let n = 120; // Change this number to test with different values
let primeFactors = getPrimeFactors(n);

console.log(`Prime Factors of ${n}:`, primeFactors);
