// Function to check if the given value is an array or not
function is_array(value) {
  // Use the Array.isArray() method to check if the value is an array
  let result = Array.isArray(value);
  // Return the result (true or false)
  return result;
}

// Example usage
console.log(is_array("Welcome"));
console.log(is_array([1]));