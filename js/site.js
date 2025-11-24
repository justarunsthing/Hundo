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
    let templateRows = "";

    numbers.forEach(element => {
        if (element % 2 == 0) {
            templateRows += `<tr><td><strong>${element}</strong></td></tr>`;
        } else {
            templateRows += `<tr><td>${element}</td></tr>`;
        }
    });

    // Push table rows 
    document.getElementById("results").innerHTML = templateRows;
}

// Set date
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = `©${currentYear}`;