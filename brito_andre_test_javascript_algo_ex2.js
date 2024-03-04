//1 -  JAVASCRIPT "F21" function which accepts 1 input parameter "A" of table type with 9 positions as input.
// input parameter "A"
var A = new Array(9);
    A[0] = "1 2 3 4 5 6 7 8 9";
    A[1] = "4 5 6 7 8 9 1 2 3";
    A[2] = "7 8 9 1 2 3 4 5 6";
    A[3] = "2 3 1 5 6 4 8 9 7";
    A[4] = "5 6 7 8 9 1 2 3 4";
    A[5] = "8 9 4 2 3 7 5 6 1";
    A[6] = "3 1 2 6 4 5 9 7 8";
    A[7] = "6 4 5 9 7 8 3 1 2";
    A[8] = "9 7 8 3 1 2 6 4 5";


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
                return false; // // if the input array is not good 
            }

            checkedDigit[num] = true; 
        }
    }

    return true; // if the input array is good (failing)
}


