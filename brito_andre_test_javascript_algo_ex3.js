
// 1 - function "F31" which calls the previous function "F21" for eachline of the table "to_check"...
function checkLines(array_number) {
    let anomalies = [];

    // Iterate through each line of the to_check table
    for (let i = 0; i < array_number.length; i++) {
        // Call the F21 function for the current line
        const isValidLine = processTable(array_number[i]);

        // If F21 returns false, accumulate the anomaly
        if (!isValidLine) {
            anomalies.push(`Line ${i + 1} incorrect ${array_number[i]}`);
        }
    }

    // Return anomalies if any, otherwise return a message indicating the table is correct
    return anomalies.length ? anomalies : ['The table is correct'];
}

// 2-  function "F32" which processes each column
function checkColumns(array_number) {
    let anomalies = [];

    // Iterate through each column of the array_number table
    for (let j = 0; j < array_number[0].length; j++) {
        // Extract the j-th column
        const column = array_number.map(row => row[j]);

        // Call the processTable function (or its equivalent) for the current column
        const isValidColumn = processTable(column);

        // If processTable returns false, accumulate the anomaly
        if (!isValidColumn) {
            anomalies.push(`Column ${j + 1} incorrect ${column}`);
        }
    }

    // Return anomalies if any, otherwise return a message indicating the table is correct
    return anomalies.length ? anomalies : ['The table is correct'];
}

// 3-  F33 function which deals with each region of the table "checkbox".
function checkRegions(array_number) {
    let anomalies = [];

    // Iterate through each region (3x3 subgrid) of the array_number table
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            // Extract the current region (3x3 subgrid)
            const region = [];

            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    region.push(array_number[i][j]);
                }
            }

            // Call the processTable function (or its equivalent) for the current region
            const isValidRegion = processTable(region);

            // If processTable returns false, accumulate the anomaly
            if (!isValidRegion) {
                anomalies.push(`Region (${row + 1}-${col + 1}) incorrect ${region}`);
            }
        }
    }

    // Return anomalies if any, otherwise return a message indicating the table is correct
    return anomalies.length ? anomalies : ['The table is correct'];
}

// Export the F33 function for use in other scripts
window.checkRegions = checkRegions;

const lineAnomalies = checkLines(array_number);
console.log('Line anomalies:', lineAnomalies);

const columnAnomalies = checkColumns(array_number);
console.log('Column anomalies:', columnAnomalies);

// Export the functions for use in other scripts
window.checkLines = checkLines;
window.checkColumns = checkColumns;