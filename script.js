const result = document.querySelector(".result");
const inputs = document.querySelector(".inputs");

let isOperationSet = false;

createBtnListeners();


function createBtnListeners() {

    const numberBtn = Array.from(document.querySelectorAll(".number"));
    numberBtn.forEach((btn) => btn.addEventListener("click", updateNumber));

    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click", deleteDisplay);

    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", clearDisplay);

    const operatorBtn = Array.from(document.querySelectorAll(".operator"));
    operatorBtn.forEach(btn => btn.addEventListener("click", setOperation));

    const decimalBtn = document.querySelector(".decimal");
    decimalBtn.addEventListener("click", setDecimal);
}

function updateNumber(e) {

    if (inputs.textContent === "0"){
        inputs.textContent = "";
    }
    inputs.textContent += e.target.textContent;
}

function deleteDisplay() {
    if (inputs.textContent.length < 2){ 
        inputs.textContent = "0";
    }
    else {
        inputs.textContent = inputs.textContent.slice(0,-1);
    }
    
}

function clearDisplay() {
    inputs.textContent = "";
    result.textContent = "";
}

function setOperation(e) {
    const operator = e.target.textContent;
    const resultText = result.textContent;
    const listOfOperators = ["+","-","x","÷"];

    // No operator in the results, add operator with input number
    if (listOfOperators.some(operationSign => resultText.includes(operationSign) === false)){
        result.textContent = inputs.textContent + " " + operator;
        return
    }

    // if user clicks on the same operator, nothing happens
    if (!resultText.split(" ")[2]){
        result.textContent.splice(-1, 1, operator)
        return
    }
    
    

    else if (resultText.includes("+") || resultText.includes("-") || resultText.includes("x") || resultText.includes("÷")){

    }
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