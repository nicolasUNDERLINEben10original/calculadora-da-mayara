let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    // Adiciona o ponto apenas se não houver um ponto já no número
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function chooseOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Erro: Divisão por zero!");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        case "%":
            result = (prev * current) / 100;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}