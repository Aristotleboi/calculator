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

console.log(operate(7, 4, 2));