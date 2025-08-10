// Add missing methods for button presses

function percentPressed() {
    // Calculate percentage of current value
    setValue(getValue() / 100);
}

function backspacePressed() {
    // Remove last character from current value
    let val = getValue().toString();
    if (val.length > 1) {
        val = val.slice(0, -1);
        if (val === '-' || val === '') val = '0';
    } else {
        val = '0';
    }
    setValue(val);
}

function sqrtPressed() {
    operand1 = getValue();
    operation = 'sqrt';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function logPressed() {
    operand1 = getValue();
    operation = 'log';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function expPressed() {
    operand1 = getValue();
    operation = 'exp';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function sinPressed() {
    operand1 = getValue();
    operation = 'sin';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function cosPressed() {
    operand1 = getValue();
    operation = 'cos';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function tanPressed() {
    operand1 = getValue();
    operation = 'tan';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function asinPressed() {
    operand1 = getValue();
    operation = 'asin';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function acosPressed() {
    operand1 = getValue();
    operation = 'acos';
    state = states.complete;
    calculate(operand1, 0, operation);
}

function atanPressed() {
    operand1 = getValue();
    operation = 'atan';
    state = states.complete;
    calculate(operand1, 0, operation);
}
