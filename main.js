let numberInput1 = "";
let operator = "";
let numberInput2 = "";
let sum = 0;

let display;

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.getElementsByClassName("button");
  display = document.getElementById("display");
  for (const button of buttons) {
    button.addEventListener("click", () => {
      setInput(button.dataset.value, button.dataset.type);
    });
  }
});

function operate(numInput1, numInput2, operator) {
  let tempSum = 0;
  switch (operator) {
    case "+":
      tempSum = add(numInput1, numInput2);
      break;
    case "-":
      tempSum = subtract(numInput1, numInput2);
      break;
    case "x":
      tempSum = multiply(numInput1, numInput2);
      break;
    case "/":
      if (numInput2 == 0) {
        alert("Can not divide by 0");
        numInput2 = "";
      } else {
        tempSum = divide(numInput1, numInput2);
      }
      break;
  }
  display.innerText = tempSum;
  numberInput1 = sum = tempSum;
  numberInput2 = "";
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function setInput(input, type) {
  if (type == "num") {
    if (operator == "" && sum == 0) {
      numberInput1 += input;
      display.innerText = numberInput1;
    } else {
      numberInput2 += input;
      display.innerText = numberInput2;
    }
  } else {
    if (input == "=") {
      operate(Number(numberInput1), Number(numberInput2), operator);
    }
    operator = input;
  }
}
