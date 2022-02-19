let calcInput = " ";
let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let previousOperator = null;

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

function operate(operator) {
    //let splitInput = calcInput.split("");
   
    
    let firstOperandForCalc = 0;
    let secondOperandForCalc = 0;

    if (firstOperand != 0) {
        secondOperand = parseInt(input.value);
        //Store operands and reset global operands
        firstOperandForCalc = firstOperand;
        secondOperandForCalc = secondOperand;

        
        firstOperand = 0;
        secondOperand = 0;
        
        if (previousOperator === "-") {
            result = firstOperandForCalc - secondOperandForCalc;
            input.value = result;
            console.log(result + " sub operand");
        } else if (previousOperator === "+") {
            result = firstOperandForCalc + secondOperandForCalc;
            input.value = result;
            console.log(result + " add operand");
        } else if (previousOperator === "*") {
            result = firstOperandForCalc * secondOperandForCalc;
            input.value = result;
            console.log(result + " mult operand");
        } else if (previousOperator === "/") {
            result = firstOperandForCalc * secondOperandForCalc;
            input.value = result;
            console.log(result + " div operand");
        } 
        if(previousOperator != "="){
            input.value = "";
        }

    } else {
        firstOperand = parseInt(input.value);
        input.value = "";
        previousOperator = operator;
        //ChECK BELOW LATER
        //For now since can write with keyboard, check input first
        /*if(typeof numberToOperate != "number"){
            console.log("Not a number");
        }*/

    }



    
    

    



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



