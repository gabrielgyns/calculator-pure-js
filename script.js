const display = document.getElementById('display');

function writeOnDisplay(digit) {
    let text = display.textContent;

    // Check if the last and actual digit is a dot, if it is, will not add a new dot.
    const lastDigit = text.slice(-1); // str.endsWith('.')
    if (lastDigit === '.' && digit === '.') return;

    text += digit;

    display.innerText = text;
}

function clearDisplay() {
    display.textContent = '';
}

function deleteDigit() {
    let text = display.textContent;

    text = text.slice(0, -1);
    display.textContent = text;
}

function result() {
    let text = display.textContent;

    display.innerText = eval(text);
}