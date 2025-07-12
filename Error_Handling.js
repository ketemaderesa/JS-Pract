try {
  let x = y + 1; // y is not defined
} catch (error) {
  console.log("An error happened:", error.message);
}


function divide(a, b) {
  try {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  } catch (e) {
    return e.message;
  }
}
console.log(divide(10, 0)); // Output: Division by zero
