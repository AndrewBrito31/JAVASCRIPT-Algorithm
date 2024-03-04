// 1 -  create a "to_verify' JAVASCRIPT table of 9x9
var toVerify = new Array(9);

toVerify[0] = "4 9 5 2 7 3 6 8 1";
toVerify[1] = "6 1 3 9 4 8 7 5 2";
toVerify[2] = "8 2 7 5 6 1 4 3 9";
toVerify[3] = "7 6 1 8 2 4 5 9 3";
toVerify[4] = "9 5 8 6 3 7 2 1 4";
toVerify[5] = "2 3 4 1 5 9 8 6 7";
toVerify[6] = "1 7 9 4 8 5 3 2 6";
toVerify[7] = "3 8 2 7 9 6 1 4 5";
toVerify[8] = "5 4 6 3 1 2 9 7 8";

//2 -  insert function F11 to read the table provided and to transfer it to the table defined in 1 (toVerify)
function readTableToVerify(tableDigits) {
    var tableDigits = array_number;
    var _digit = Number;
    for (let i = 0; i < 9; i++) {
        toVerify[i] = tableDigits[i].split(' ').map(_digit);
    }
}


// Call the function to transfer the data to the 'toVerify' table
readTableToVerify(toVerify);

// Call the function to transfer the data to the 'toVerify' table

console.log(toVerify);

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
