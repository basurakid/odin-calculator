const resultPara = document.querySelector(".result");
const inputPara = document.querySelector(".input");

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

    const equalBtn = document.querySelector(".resolve");
    equalBtn.addEventListener("click", resolve);
}

function updateNumber(e) {

    if (inputPara.textContent === "0"){
        inputPara.textContent = "";
    }

    inputPara.textContent += e.target.textContent;
}

function deleteDisplay() {
    if (inputPara.textContent.length < 2){ 
        inputPara.textContent = "0";
    }
    else {
        inputPara.textContent = inputPara.textContent.slice(0,-1);
    }
    
}

function clearDisplay() {
    inputPara.textContent = "0";
    resultPara.textContent = "";
}

function setOperation(e) {
    const operator = e.target.textContent;
    const resultText = resultPara.textContent;
    const listOfOperators = ["+","-","x","÷"];

    // No operator in the results, add operator with input number
    if (!listOfOperators.some(operationSign => resultText.includes(operationSign))){
        if (resultText){
            resultPara.textContent = `${resultText} ${operator}`;
        }
        else {
            resultPara.textContent = inputPara.textContent + " " + operator;
            inputPara.textContent = "0";
        }
        return;
    }
    // If there's already operator but not 2nd operand, we change operator.
    else if (!resultText.split(" ")[2]){
        const splitText = resultText.split(" ");
        resultPara.textContent = `${splitText[0]} ${operator}`;
        return;
    }
    // If the operation is all set, we resolve it and apply the operator to the resultPara
    //else {
    //    resolve();
    //    resultPara.textContent += " " + operator;
    //}

}

function resolve() {
    let expression = resultPara.textContent.split(" ");

    if (expression.length === 2) {
        resultPara.textContent += " " + inputPara.textContent;
        expression = resultPara.textContent.split(" ");
        resultPara.textContent = operate(expression[1], expression[0], expression[2]);
        inputPara.textContent = "0";
    }

}

function setDecimal() {
    if (inputPara.includes(".")){
        return
    }
    else{
        inputPara.textContent += ".";
    }
}

function operate(op, x, y) {
    x = parseInt(x);
    y = parseInt(y);
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
        const total = x + y;
        return total % 1 ? total.toFixed(2) : total;
    }
    
    function subtract(x, y) {
        const total = x - y;
        return total % 1 ? total.toFixed(2) : total;
    }
    
    function multiply(x, y) {
        const total = x * y;
        return total % 1 ? total.toFixed(2) : total;
    }
    
    function divide(x, y) {
        if (y === 0){
            alert("NICE TRY!")
            return
        }
        const total = x / y;
        return total % 1 ? total.toFixed(2) : total;
    }
}