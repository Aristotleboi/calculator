function adding(a, b) {
    return a +  b
};

function subtracting(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function division(a, b) {
    return a / b
};

function operate(firstVar, secondVar, operation) {
    if (operation === 1) {
        return adding(firstVar, secondVar)
    } else if (operation === 2) {
        return subtracting(firstVar, secondVar)
    } else if (operation === 3) {
        return multiply(firstVar, secondVar)
    } else if (operation === 4) {
        return division (firstVar, secondVar)
    }
}


//operator buttons
const addition = document.querySelector('#add');
addition.addEventListener('click', () => {
    if (userOperator === 0 && currentNum === "" && lastNum === 0) {
        screenDisplay(lastNum);
        console.log('pressing add')
    } else if (userOperator === 0 & lastNum === 0) {
        userOperator = 1;
        lastNum = currentNum;
        currentNum = "";
        screenDisplay(lastNum);
        console.log ("first number");
    } else if (userOperator === 0 && lastNum !== 0) {
        userOperator = 1;
        screenDisplay(lastNum);
        console.log('pressed add after pressing =')
    } else {
        currentNum = parseFloat(currentNum);
        lastNum = parseFloat(lastNum);
        lastNum = operate(lastNum, currentNum, userOperator);
        screenDisplay(lastNum);
        userOperator = 1;
        currentNum = "";
        console.log("keep pressing the add button");
    }
});
const subtraction = document.querySelector('#subtract');
subtraction.addEventListener('click', () => {
    if (userOperator === 0 && currentNum === "" && lastNum === 0) {
        screenDisplay(lastNum);
    } else if (userOperator === 0 & lastNum === 0) {
        userOperator = 2;
        lastNum = currentNum;
        currentNum = "";
        screenDisplay(lastNum);
    } else if (userOperator === 0 && lastNum !== 0) {
        userOperator = 2;
        lastNum = userAnswer;
        screenDisplay(lastNum);
    } else {
        currentNum = parseFloat(currentNum);
        lastNum = parseFloat(lastNum);
        lastNum = operate(lastNum, currentNum, userOperator);
        screenDisplay(lastNum);
        userOperator = 2;
        currentNum = "";
    }
});
const multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', () => {
    if (userOperator === 0 && currentNum === "" && lastNum === 0) {
        screenDisplay(lastNum);
    } else if (userOperator === 0 & lastNum === 0) {
        userOperator = 3;
        lastNum = currentNum;
        currentNum = "";
        screenDisplay(lastNum);
    } else if (userOperator === 0 && lastNum !== 0) {
        userOperator = 3;
        lastNum = userAnswer;
        screenDisplay(lastNum);
    } else {
        currentNum = parseFloat(currentNum);
        lastNum = parseFloat(lastNum);
        lastNum = operate(lastNum, currentNum, userOperator);
        screenDisplay(lastNum);
        userOperator = 3;
        currentNum = "";
    }
});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    if (userOperator === 0 && currentNum === "" && lastNum === 0) {
        screenDisplay(lastNum);
    } else if (userOperator === 0 & lastNum === 0) {
        userOperator = 4;
        lastNum = currentNum;
        currentNum = "";
        screenDisplay(lastNum);
    } else if (userOperator === 0 && lastNum !== 0) {
        userOperator = 4;
        lastNum = userAnswer;
        screenDisplay(lastNum);
    } else {
        currentNum = parseFloat(currentNum);
        lastNum = parseFloat(lastNum);
        lastNum = operate(lastNum, currentNum, userOperator);
        screenDisplay(lastNum);
        userOperator = 4;
        currentNum = "";
    }
});
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    currentNum = parseFloat(currentNum);
    lastNum = parseFloat(lastNum);
    userAnswer = operate(lastNum, currentNum, userOperator);
    lastNum = userAnswer
    currentNum = "";
    userOperator = 0;
    screenDisplay(userAnswer);
});

//number buttons
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    currentNum = currentNum + '1';
    screenDisplay(currentNum);
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
    currentNum = currentNum + '2';
    screenDisplay(currentNum);
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
    currentNum = currentNum + '3';
    screenDisplay(currentNum);
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    currentNum = currentNum + '4';
    screenDisplay(currentNum);
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    currentNum = currentNum + '5';
    screenDisplay(currentNum);
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    currentNum = currentNum + '6';
    screenDisplay(currentNum);
});
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    currentNum = currentNum + '7';
    screenDisplay(currentNum);
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    currentNum = currentNum + '8';
    screenDisplay(currentNum);
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    currentNum = currentNum + '9';
    screenDisplay(currentNum);
});
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    currentNum = currentNum + '0';
    screenDisplay(currentNum);
});
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    currentNum = currentNum + '.';
    screenDisplay(currentNum);
});

//Other buttons
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    currentNum = "";
    screenDisplay(lastNum);
});
const clearAll = document.querySelector('#clear-all')
clearAll.addEventListener('click', () => {
    currentNum = "";
    lastNum = 0;
    userOperator = 0;
    userAnswer = 0;
    screenDisplay(lastNum);
});




let screen = document.getElementsByClassName('screen');
let screenContent = document.querySelector('p')


function screenDisplay(text) {
    screenContent.innerText = `${text}`;
}


let currentNum = "";
let lastNum = 0;
let userAnswer = 0;
let userOperator = 0;



