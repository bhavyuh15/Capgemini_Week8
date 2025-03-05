function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    console.log("Without Sorting:");
    console.log("Second Largest:", secondLargest);
    console.log("Second Smallest:", secondSmallest);
}

function findSecondLargestSmallestWithSorting(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b); // Sort in ascending order

    console.log("Sorted Array:", sortedArr);
    console.log("With Sorting:");
    console.log("Second Smallest:", sortedArr[1]); // Second element
    console.log("Second Largest:", sortedArr[sortedArr.length - 2]); // Second last element
}

// Generate 10 random 3-digit numbers (between 100-999)
let numbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbers);

// Find without sorting
findSecondLargestSmallest(numbers);

// Find with sorting
findSecondLargestSmallestWithSorting(numbers);
