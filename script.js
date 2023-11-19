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
        document.getElementById('result').innerHTML = "Root 1: " + root1 + "<br>Root 2: " + root2;
    } else {
        document.getElementById('result').innerHTML = "The equation has no real roots.";
    }
}
