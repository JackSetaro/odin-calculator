let numberInput1;
let operator;
let numberInput2;

let display;

document.addEventListener('DOMContentLoaded',() => {
    display = document.getElementById("display");
});

function operate(numberInput1, numberInput2, operator) {
    switch (operator) {
        case "+":
            add(numberInput1, numberInput2);
        case "-":
            subtract(numberInput1, numberInput2);
        case "x":
            multiply(numberInput1, numberInput2);
        case "/":
            divide(numberInput1, numberInput2);
    }
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