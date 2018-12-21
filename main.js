

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == '+') {
        add(a, b);
    } else if (operator == '-') {
        subtract(a, b);
    } else if (operator == '*') {
        multiply(a, b);
    } else if (operator == '/') {
        divide(a, b);
    }
}


function parse(string) {
    // If string is number return string as float
    // else return the original string 
    if (!isNaN(string)) {
        return parseFloat(string);
    } else {
        return string;
    }
}

function addToDisplay(button) {
    var display = document.querySelector(".display");
    display.innerText += button.innerText
    console.log('dfd')
}

function addEvents() {
    var 
}

addEvents();