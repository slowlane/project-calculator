let calcInput = " ";
let inputOperand = 0;
let result = 0;
let previousOperator = null;
let passed = false;

const numbersDiv = document.querySelector(".numbers-div");
const buttonsDiv = document.querySelector(".button-div");
const input = document.querySelector(".calculate-input");
const clearButton = document.querySelector(".clear-button");

function add(numOne, numTwo) {
    return numOne + numTwo;
}
function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function populateDisplay(text) {
    input.value += text;
    calcInput = input.value;
}

function operators(number, operator, numberTwo) {

    if (!Number.isNaN(numberTwo)) {
        switch (operator) {
            case "=":
                return number = numberTwo;
                break;
            case "+":
                return add(number, numberTwo);
                break;
            case "-":
                return subtract(number, numberTwo);
                break;
            case "*":
                return multiply(number, numberTwo);
                break;
            case "/":
                return divide(number, numberTwo);
                break;
            default:
                break;
        }
    } 
    else {
        return number;
    }
}

function operate(operator) {

    /* if a result has been obtained, skip 1 call of this function, to prevent 
    previousOperator from messing with result, otherwise it would return result = inputOperator 
    which isn't true almost ever */
    if(passed){
        passed = false;
        input.value = "";
        previousOperator = operator;
        return;
    }
    
    inputOperand = parseInt(input.value);
    input.value = "";

    if (result != 0) {
        switch (operator) {
            case "+":
                result += inputOperand;
                break;
            case "-":
                result -= inputOperand;
                break;
            case "*":
                result *= inputOperand;
                break;
            case "/":
                result /= inputOperand;
                break;
            default:
                result = operators(result, previousOperator, inputOperand);
                input.value = result;  
                passed = true;
                break;
        }
    } 
    else 
    {
        result = inputOperand;
    }

    previousOperator = operator;
}



for (let i = 0; i < 10; i++) {
    const newButton = document.createElement("button");
    const content = document.createTextNode(`${i}`);

    newButton.classList.add("calc-button");
    newButton.appendChild(content);
    newButton.addEventListener("click", e => {
        populateDisplay(e.target.innerText);
    });

    numbersDiv.appendChild(newButton);
}

const buttonArray = Array.from(buttonsDiv.childNodes);
for (let button of buttonArray) {

    button.addEventListener("click", e => {
        operate(button.innerText);
    });

}



