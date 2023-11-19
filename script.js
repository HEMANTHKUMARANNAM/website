const fs = require('fs'); // For Node.js environment

function calculateRoots() {
    // Get coefficients from user input
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    // Calculate the discriminant
    var discriminant = b * b - 4 * a * c;

    // Check if the discriminant is non-negative
    if (discriminant >= 0) {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        var resultText = "Root 1: " + root1 + "\nRoot 2: " + root2;

        document.getElementById('result').innerHTML = resultText;

        // Append values to a text file
        appendToFile(`a: ${a}, b: ${b}, c: ${c}, Roots: ${root1}, ${root2}`);
    } else {
        document.getElementById('result').innerHTML = "The equation has no real roots.";
    }
}

function appendToFile(data) {
    // For Node.js environment
    fs.appendFileSync('output.txt', data + '\n', 'utf8');
    console.log('Data appended to the file.');
}
