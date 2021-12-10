// Math is an object . PI is his property.

function main(r) {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  //   let r = readLine();
  const area = parseFloat(PI * Math.pow(r, 2));
  const perimeter = parseFloat(2 * PI * r);
  // Print the area of the circle:
  console.log(area);
  // Print the perimeter of the circle:
  console.log(perimeter);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

main(2.6);
