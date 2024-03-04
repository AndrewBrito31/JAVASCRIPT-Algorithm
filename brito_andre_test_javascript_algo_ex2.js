//1 -  JAVASCRIPT "F21" function which accepts 1 input parameter "A" of table type with 9 positions as input.
function processTable(A) {
    //2 - verify that all the positions are numbers (from 1 to 9) and all different from each other. 
    var checkedDigit = {};

    // Iterate over each row in A
    for (var i = 0; i < A.length; i++) {
        // Split the string into an array of characters
        var numbers = A[i].split(' ');

        // Iterate over each element in the row
        for (var j = 0; j < numbers.length; j++) {
            // Convert each character to a number
            var num = parseInt(numbers[j]);

            // Check if the number is not a valid number between 1 and 9 or has been encountered before
            if (isNaN(num) || num < 1 || num > 9 || checkedDigit[num]) {
                return false; // 3- If the input array is not good return false
            }

            checkedDigit[num] = true;
        }
    }

    return true; // 3 If the input array is good return true
}

// Call the processTable function with the variable array_number
const isGoodArray = processTable(array_number);

// Output the result
console.log("Is the input array good?", isGoodArray);

// Attach the processTable function to the window object
window.processTable = processTable;
