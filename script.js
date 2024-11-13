const display = document.querySelector(".display");
const result = document.querySelector(".result");
const inputs = document.querySelector(".inputs");

addBtnListeners();


function addBtnListeners() {
    const updateDisplayBtn = Array.from(document.querySelectorAll("updates"));
    updateDisplayBtn.forEach((btn) => btn.addEventListener(updateDisplay(btn.textContent)));
}

function updateDisplay(content) {
    display.textContent = content;
}

function operate(op, x, y) {
    if (op === "+"){
        return add(x, y);
    }
    else if (op === "-"){
        return subtract(x, y);
    }
    else if (op === "x"){
        return multiply(x, y);
    }
    else if (op === "÷"){
        return divide(x, y);
    }
    else{
        return "Operator not found."
    }

    function add(x,y) {
        return x + y; 
    }
    
    function subtract(x, y) {
        return x - y; 
    }
    
    function multiply(x, y) {
        return x * y;
    }
    
    function divide(x, y) {
        return x / y;
    }
}