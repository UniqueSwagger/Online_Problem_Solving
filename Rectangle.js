/*
 * Complete the Rectangle function
 */
class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
  }
}
const myRectangle = new Rectangle(2, 3);
