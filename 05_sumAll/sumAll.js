const sumAll = function (min, max) { // Create function expression
    if (!Number.isInteger(min) || !Number.isInteger(max)) return `ERROR`; // Check if the number is an integer
    if (min < 0 || max < 0) return `ERROR`; // Check for negative numbers
    if (min > max) {
        const temp = min; // Switch min and max numbers
        min = max;
        max = temp;
    }

    let sum = 0; // Variable to hold final sum
    for (let i = min; i <= max; i++) { // Loop through all the numbers
        sum += i; // Add the loop numbers to the sum
    }

    return sum; // Return final sum

};

// Do not edit below this line
module.exports = sumAll;
