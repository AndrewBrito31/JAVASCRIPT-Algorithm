// 1 -  create a "to_verify' JAVASCRIPT table of 9x9
// 3- Define the toVerify JavaScript table of 9x9 boxes
const toVerify = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// 2- Function to read and transfer the provided table to the toVerify table
function readTableToVerify() {
    for (let i = 0; i < array_number.length; i++) {
        let numbers = array_number[i].split(" ").map(Number);
        for (let j = 0; j < numbers.length; j++) {
            toVerify[i][j] = numbers[j];
        }
    }
}

// Call the function to transfer the data to the 'toVerify' table
readTableToVerify();

// Print the 'toVerify' table to console
console.log(toVerify);

// Export the 'toVerify' table and the 'readTableToVerify' function for use in other scripts
window.toVerify = toVerify;
window.readTableToVerify = readTableToVerify;

// 3 - insert function F12 allowing to display the content of the table "to be verified", in the form of an HTML table (9x9).
function displayTable() {
    var table = document.getElementById('toVerifyTable');
    for (let i = 0; i < 9; i++) {
        var row = table.insertRow();
        for (let j = 0; j < 9; j++) {
            var cell = row.insertCell();
            cell.innerText = toVerify[i][j];
        }
    }
}