function displayValues() {
    // Get values from the inputs
    let startValue = document.getElementById("start-value").value;
    let endValue = document.getElementById("end-value").value;

    // Convert string to int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validation
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Generate numbers
        let numbers = generateNumbers(startValue, endValue);
        // Display Numbers
        displayNumbers(numbers);
    } else {
        alert("Error: You must enter integers!");
    }
}

// Generate values from start to end value
function generateNumbers(startValue, endValue) {
    let numbers = [];

    if (startValue <= endValue) {
        // Count up
        for (let i = startValue; i <= endValue; i++) {
            numbers.push(i);
        }
    } else {
        // Count down
        for (let i = startValue; i >= endValue; i--) {
            numbers.push(i);
        }
    }

    return numbers;
}

// Generate table rows, even numbers in bold
function displayNumbers(numbers) {
    const columnsPerRow = 10; // Number of columns per row
    let templateRows = "";

    for (let i = 0; i < numbers.length; i += columnsPerRow) {
        templateRows += "<tr>"; // start a new row

        for (let j = 0; j < columnsPerRow; j++) {
            const element = numbers[i + j];
            if (element === undefined) break; // stop if no more numbers

            // Bold even numbers
            let cellContent = (element % 2 === 0) ? `<strong>${element}</strong>` : element;

            templateRows += `<td>${cellContent}</td>`; // create a table cell
        }

        templateRows += "</tr>"; // close the row
    }

    document.getElementById("results").innerHTML = templateRows;
}

// Set date
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = `©${currentYear}`;