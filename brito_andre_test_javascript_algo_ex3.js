// Function F31
function checkTable(toCheck) {
    // Iterate over each line of the table to_check
    for (var i = 0; i < toCheck.length; i++) {
        // Call the processTable function (F21) to check the validity of the current line
        var isValid = processTable(toCheck[i]);

        // If the current line is not valid
        if (!isValid) {
            // Print an error message indicating the line number and the values of the stations on the line
            console.log("Anomaly detected in line", i + 1, ":", toCheck[i]);
        }
    }
}

// Example table to_check
var toCheck = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
];

// Call the F31 function to validate the table
checkTable(toCheck);