/*jshint esversion: 6 */

const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const plusButton = document.getElementById("plus");

const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const minusButton = document.getElementById("minus");

const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const multiplyButton = document.getElementById("multiply");

const clearButton = document.getElementById("clear");
const zeroButton = document.getElementById("zero");
const equalsButton = document.getElementById("equals");
const divideButton = document.getElementById("divide");

const calculatorDisplay = document.getElementById("calc-display");

const regEx = /[0-9]|\+|-|\*|\//;

const plusSign = "+";
const minusSign = "-";
const multiplySign = "*";
const divideSign = "/";


function isOperand(item) {
    return item === plusSign || item === minusSign || item === multiplySign || item === divideSign;
}

function clear() {
    calculatorDisplay.value = "";
}

function calculateNextDisplay() {
    const lastChar = calculatorDisplay.value[calculatorDisplay.value.length - 1];
    const isLastCharOp = isOperand(lastChar);

    let nextToLastChar = "";
    let isNextToLastCharOp = false;

    if (calculatorDisplay.value.length > 1) {
        nextToLastChar = calculatorDisplay.value[calculatorDisplay.value.length - 2];
        isNextToLastCharOp = isOperand(nextToLastChar);
    }

    if (lastChar && isLastCharOp && nextToLastChar && isNextToLastCharOp) {
        calculatorDisplay.value = calculatorDisplay.value.substring(0, calculatorDisplay.value.length - 2) + lastChar;
    }
    else if (lastChar && !lastChar.match(regEx)) {
        calculatorDisplay.value = calculatorDisplay.value.substring(0, calculatorDisplay.value.length - 1);
    }
}

function addNextEntry(item) {
    calculatorDisplay.value += item;
    calculateNextDisplay();
}

function performCalculation(operator, registerOne, registerTwo) {
    switch (operator) {
        case plusSign:
            return registerOne + registerTwo;
        case minusSign:
            return registerOne - registerTwo;
        case multiplySign:
            return registerOne * registerTwo;
        case divideSign:
            return Math.round(registerOne / registerTwo);
    }
}

function parseDisplay(display) {
    let currentNumberString = "";
    let parsedExpression = [];
    
    for (let i = 0; i < display.length; i++) {
        if (isNaN(display[i])) {
            parsedExpression.push(Number(currentNumberString));
            parsedExpression.push(display[i]);

            currentNumberString = "";
        }
        else {
            currentNumberString += display[i];
        }
    }

    if (currentNumberString.length > 0) {
        parsedExpression.push(Number(currentNumberString));
    }

    return parsedExpression;
}

function processExpression(parsedExpression, operatorOne, operatorTwo) {
    let i = 0;
    let tempArray = [];
    let justCalculated = false;

    while (i < parsedExpression.length) {
        if (parsedExpression[i] === operatorOne || parsedExpression[i] === operatorTwo) {
            let leftHandValue = justCalculated ? tempArray[tempArray.length-1] : parsedExpression[i-1];
            
            let operator = parsedExpression[i];
            let rightHandValue = parsedExpression[i+1];

            let result = performCalculation(operator, leftHandValue, rightHandValue);

            tempArray.pop();
            tempArray.push(result);

            i += 2;
            justCalculated = true;
        }
        else {
            tempArray.push(parsedExpression[i]);
            i++;

            justCalculated = false;
        }
    }

    return tempArray;
}


function calculate() {
    if (calculatorDisplay.value.length === 0) {
        return;
    }

    let parsedExpression = parseDisplay(calculatorDisplay.value);

    if (parsedExpression.length === 0) {
        return;
    }

    let tempArray = processExpression(parsedExpression, multiplySign, divideSign);
    let result = processExpression(tempArray, plusSign, minusSign);

    calculatorDisplay.value = result[0];
}


sevenButton.addEventListener("click", function() {
    addNextEntry(7);
});

eightButton.addEventListener("click", function() {
    addNextEntry(8);
});

nineButton.addEventListener("click", function() {
    addNextEntry(9);
});

plusButton.addEventListener("click", function() {
    addNextEntry("+");
});

fourButton.addEventListener("click", function() {
    addNextEntry(4);
});

fiveButton.addEventListener("click", function() {
    addNextEntry(5);
});

sixButton.addEventListener("click", function() {
    addNextEntry(6);
});

minusButton.addEventListener("click", function() {
    addNextEntry("-");
});

oneButton.addEventListener("click", function() {
    addNextEntry(1);
});

twoButton.addEventListener("click", function() {
    addNextEntry(2);
});

threeButton.addEventListener("click", function() {
    addNextEntry(3);
});

multiplyButton.addEventListener("click", function() {
    addNextEntry("*");
});

clearButton.addEventListener("click", function() {
    clear();
});

zeroButton.addEventListener("click", function() {
    addNextEntry(0);
});

equalsButton.addEventListener("click", function() {
    calculate();
});

divideButton.addEventListener("click", function() {
    addNextEntry("/");
});


calculatorDisplay.addEventListener("input", function() {
    calculateNextDisplay();
});


document.body.addEventListener('keydown', function(e) {
    if (document.activeElement === calculatorDisplay && e.key != "Enter") {
        return;
    }

    switch (e.key) {
        case "7":
            addNextEntry(7);
            sevenButton.classList.add("key-press");
            break;
        case "8":
            addNextEntry(8);
            eightButton.classList.add("key-press");
            break;
        case "9":
            addNextEntry(9);
            nineButton.classList.add("key-press");
            break;
        case "+":
            addNextEntry("+");
            plusButton.classList.add("key-press");
            break;
        case "4":
            addNextEntry(4);
            fourButton.classList.add("key-press");
            break;
        case "5":
            addNextEntry(5);
            fiveButton.classList.add("key-press");
            break;
        case "6":
            addNextEntry(6);
            sixButton.classList.add("key-press");
            break;
        case "-":
            addNextEntry("-");
            minusButton.classList.add("key-press");
            break;
        case "1":
            addNextEntry(1);
            oneButton.classList.add("key-press");
            break;
        case "2":
            addNextEntry(2);
            twoButton.classList.add("key-press");
            break;
        case "3":
            addNextEntry(3);
            threeButton.classList.add("key-press");
            break;
        case "*":
            addNextEntry("*");
            multiplyButton.classList.add("key-press");
            break;     
        case "0":
            addNextEntry(0);
            zeroButton.classList.add("key-press");
            break;
        case "Enter":
        case "=":
            calculate();
            equalsButton.classList.add("key-press");
            break;
        case "/":
            addNextEntry("/");
            divideButton.classList.add("key-press");
            break;   
    }
});

document.body.addEventListener('keyup', function(e) {
    switch (e.key) {
        case "7":
            sevenButton.classList.remove("key-press");
            break;
        case "8":
            eightButton.classList.remove("key-press");
            break;
        case "9":
            nineButton.classList.remove("key-press");
            break;
        case "+":
            plusButton.classList.remove("key-press");
            break;
        case "4":
            fourButton.classList.remove("key-press");
            break;
        case "5":
            fiveButton.classList.remove("key-press");
            break;
        case "6":
            sixButton.classList.remove("key-press");
            break;
        case "-":
            minusButton.classList.remove("key-press");
            break;
        case "1":
            oneButton.classList.remove("key-press");
            break;
        case "2":
            twoButton.classList.remove("key-press");
            break;
        case "3":
            threeButton.classList.remove("key-press");
            break;
        case "*":
            multiplyButton.classList.remove("key-press");
            break;     
        case "0":
            zeroButton.classList.remove("key-press");
            break;    
        case "Enter":
        case "=":
            equalsButton.classList.remove("key-press");
            break;
        case "/":
            divideButton.classList.remove("key-press");
            break;
    }
});