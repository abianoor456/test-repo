// Function to calculate the sum of two numbers
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs should be numbers");
  }
  return a + b;
}

// Example usage
console.log("Sum:", add(3, 5));
