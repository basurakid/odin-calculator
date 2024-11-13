const display = document.querySelector(".display");
const result = document.querySelector(".result");
const inputs = document.querySelector(".inputs");


createBtnListeners();


function createBtnListeners() {

    const updateDisplayBtn = Array.from(document.querySelectorAll(".updates"));
    updateDisplayBtn.forEach((btn) => btn.addEventListener("click", updateDisplay));

    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click", deleteDisplay);

    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", clearDisplay);

    const operatorBtn = Array.from(document.querySelectorAll(".operator"));
    operatorBtn.forEach(btn => btn.addEventListener("click", setOperation));

    const decimalBtn = document.querySelector(".decimal");
    decimalBtn.addEventListener("click", setDecimal);
}

function updateDisplay(e) {
    console.log(e.target.textContent);
    inputs.textContent += e.target.textContent;
}

function deleteDisplay() {
    inputs.textContent = inputs.textContent.slice(0,-1);
}

function clearDisplay() {
    inputs.textContent = "";
    result.textContent = "";
}

function setOperation(e) {
    const operator = e.target.textContent;
    if (result.textContent.includes(operator)){
        return
    }
    //else if()
}

function setDecimal() {
    if (inputs.includes(".")){
        return
    }
    else{
        inputs.textContent += ".";
    }
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