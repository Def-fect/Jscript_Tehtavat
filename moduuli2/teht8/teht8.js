// Function that concatenates array elements without using join()
function concat(jutut) {
    return jutut.reduce((a, b) => a + b, "");
}

// Hardcoded array
const lista = ["Johnny", "DeeDee", "Joey", "Marky"];

// Get the concatenated string
const combinedString = concat(lista);

// Display the result in the HTML document
document.getElementById("list").textContent = combinedString;

// Optional: Log to console for verification
console.log(combinedString); // "JohnnyDeeDeeJoeyMarky"