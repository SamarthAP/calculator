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
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '×') {
        return multiply(a, b);
    } else if (operator == '÷') {
        return divide(a, b);
    }
}

function addToDisplay(button) {
    let display = document.querySelector(".display");
    if (display.innerText.length < 33) {
        // makes sure only 1 dot can be in display
        if (button.innerText == ".") {
            if (display.innerText.indexOf(".") == -1) {
                display.innerText += button.innerText;
            }
        } else {
            if (display.innerText == "0") {
                display.innerText = button.innerText;
            } else {
                display.innerText += button.innerText
            }
        }
    }
}

function allClear() {
    let display = document.querySelector(".display");
    display.innerText = "0";
    cachedOperator = "";

}

function deleteEntry() {
    let display = document.querySelector(".display");
    if (display.innerText.length == 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

// add listeners to number buttons
document.querySelectorAll(".num").forEach(num => {
    num.addEventListener('click', (e) => {
        addToDisplay(num);
    });
});

// add listener to dot 
let dot = document.querySelector(".dot")
dot.addEventListener('click', (e) => addToDisplay(dot))

// add listener to AC and DEL
document.querySelector(".misc1").addEventListener('click', (e) => allClear())
document.querySelector(".misc2").addEventListener('click', (e) => deleteEntry())

var cachedNum;
var cachedOperator;

// add listener to operators
document.querySelectorAll(".symbol").forEach(op => {
    op.addEventListener('click', (e) => {
        cachedNum = parseFloat(document.querySelector(".display").innerText);
        cachedOperator = op.innerText;
        document.querySelector(".display").innerText = "0";
        console.log(cachedNum);
        console.log(cachedOperator);
    });
});

// add listener to equal
document.querySelector(".equal").addEventListener('click', (e) => {
    let display = document.querySelector(".display")
    let otherNum = parseFloat(display.innerText);
    console.log(cachedOperator)
    console.log(cachedNum)
    console.log(otherNum)
    let ans = operate(cachedOperator, cachedNum, otherNum);
    display.innerText = ans;
})