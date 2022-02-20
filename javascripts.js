let calcInput = " ";
let inputOperand = 0;
let result = 0;
let previousOperator = null;
let passed = false;
let dotPressed = false;

const numbersDiv = document.querySelector(".numbers-div");
const buttonsDiv = document.querySelector(".button-div");
const input = document.querySelector(".calculate-input");
const clearButton = document.querySelector(".clear-button");
const calcForm = document.querySelector(".for-buttons");

function add(numOne, numTwo) {
    if(checkIfInteger(numOne, numTwo)){
        return parseInt(numOne + numTwo);
    }
    return parseFloat(numOne + numTwo).toFixed(3);
}
function subtract(numOne, numTwo) {
    if(checkIfInteger(numOne, numTwo)){
        return parseInt(numOne - numTwo);
    }
    return parseFloat(numOne - numTwo).toFixed(3);
}

function multiply(numOne, numTwo) {
    if(checkIfInteger(numOne, numTwo)){
        return parseInt(numOne * numTwo);
    }
    return parseFloat(numOne * numTwo).toFixed(3);
}

function divide(numOne, numTwo) {
    if(checkIfInteger(numOne, numTwo)){
        return parseInt(numOne / numTwo);
    }
    return parseFloat(numOne / numTwo).toFixed(3);
}

function populateDisplay(text) {
    input.value += text;
    calcInput = input.value;
}

function checkIfInteger(numOne, numTwo){
    if(Number.isInteger(numOne) && Number.isInteger(numTwo)){
        return true;
    } else{
        return false;
    }
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

    dotButton.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
    dotPressed = false;

    if (passed) {
        passed = false;
        input.value = "";
        previousOperator = operator;
        return;
    }
    
    result = parseFloat(result);
    inputOperand = parseFloat(input.value);
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
    else {
        result = inputOperand;
    }

    previousOperator = operator;
}



for (let i = 1; i < 10; i++) {
    const newButton = document.createElement("button");
    const content = document.createTextNode(`${i}`);

    newButton.classList.add("calc-button");
    newButton.appendChild(content);
    newButton.addEventListener("click", e => {  
        populateDisplay(e.target.innerText);
        

    });


    numbersDiv.appendChild(newButton);

}



//For placing 0 button after nubmers
const zeroButton = document.createElement("button");
const zeroContent = document.createTextNode(0);
zeroButton.classList.add("calc-button");
zeroButton.appendChild(zeroContent);
zeroButton.addEventListener("click", e => {
    populateDisplay(e.target.innerText);
});

//FOr placing dot
const dotButton = document.createElement("button");
const dotContent = document.createTextNode(".");
dotButton.classList.add("calc-button");
dotButton.appendChild(dotContent);
dotButton.addEventListener("click", e => {
    if(input.value.toString().includes(".")){
    }else{
        dotPressed = true;
        populateDisplay(e.target.innerText);
        dotButton.style.backgroundColor = "black";
    }
    
});

//For equals
const equalsButton = document.createElement("button");
const equalsContent = document.createTextNode("=");
equalsButton.classList.add("calc-button", "operator");
equalsButton.appendChild(equalsContent);
equalsButton.addEventListener("click", e => {
    console.log(e.target.innerText);
    operate(e.target.innerText);
});

//Undo 

const undoButton = document.createElement("button");
const undoContent = document.createTextNode("C");
undoButton.classList.add("clear-button");
undoButton.appendChild(undoContent);
undoButton.addEventListener("click", e => {
    input.value = input.value.substring(0, input.value.length - 1);
});

numbersDiv.appendChild(zeroButton);
numbersDiv.appendChild(dotButton);
numbersDiv.appendChild(equalsButton);
calcForm.appendChild(undoButton);



const buttonArray = Array.from(buttonsDiv.childNodes);
for (let button of buttonArray) {

    button.addEventListener("click", e => {
        operate(button.innerText);
    });

}

clearButton.addEventListener("click", e => {
    inputOperand = 0;
    result = 0;
    previousOperator = null;
    passed = false;
    input.value = "";
    calcInput = " ";
})



