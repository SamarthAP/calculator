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

// add listeners to number buttons
document.querySelectorAll(".num").forEach(num => {
    num.addEventListener('click', (e) => {
        addToDisplay(num);
    });
})

// add listener to dot 
let dot = document.querySelector(".dot")
dot.addEventListener('click', (e) => addToDisplay(dot))

