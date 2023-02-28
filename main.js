function rectanglePerimeter(width, height) {
  let perimeter = 2 * (width + height);
  console.log("Perimeter equal to:", perimeter);
  return perimeter;
}

function numIsEvenOdd(number) {
  if (number % 2 == 0) {
    console.log(number, "is even");
  } else {
    console.log(number, "is odd");
  }
}

function greatestNumberAmongTwo(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber, "is the greatest number of among two");
  } else {
    console.log(secondNumber, "is the greatest number of among two");
  }
}

rectanglePerimeter(10, 20);
numIsEvenOdd(10);
numIsEvenOdd(11);
greatestNumberAmongTwo(10, 20);
greatestNumberAmongTwo(3, 50);
