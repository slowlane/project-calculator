let calcInput = " ";
let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let previousOperator = null;
let passed = false;

const numbersDiv = document.querySelector(".numbers-div");
const buttonsDiv = document.querySelector(".button-div");
const input = document.querySelector(".calculate-input");
const clearButton = document.querySelector(".clear-button");

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

function populateDisplay(text) {
    input.value += text;
    calcInput = input.value;
}

function operators(number, operator, numberTwo) {

    if (!Number.isNaN(numberTwo)) {
        //console.log("Yo..");
        switch (operator) {
            case "=":
                return number = numberTwo;
                break;
            case "+":
                return number + numberTwo;
                break;
            case "-":
                return number - numberTwo;
                break;
            case "*":
                return number * numberTwo;
                break;
            case "/":
                return number / numberTwo;
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

    // if a result has been obtained, skip 1 call of this function
    if(passed){
        passed = false;
        input.value = "";
        previousOperator = operator;
        return;
    }
    
    firstOperand = parseInt(input.value);
    input.value = "";

    if (result != 0) {
        switch (operator) {
            case "+":
                result += firstOperand;
                break;
            case "-":
                result -= firstOperand;
                break;
            case "*":
                result *= firstOperand;
                break;
            case "/":
                result /= firstOperand;
                break;
            default:
                result = operators(result, previousOperator, firstOperand);
                input.value = result;  
                passed = true;
                break;
        }
    } 
    else 
    {
        result = firstOperand;
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
        /*if(clicked){
            
            input.value = "";
            //Checking if clicked an oeprator
            //clicked = false;
        }*/
        
    });

    numbersDiv.appendChild(newButton);
}

const buttonArray = Array.from(buttonsDiv.childNodes);
for (let button of buttonArray) {

    button.addEventListener("click", e => {
        operate(button.innerText);
    });

}



