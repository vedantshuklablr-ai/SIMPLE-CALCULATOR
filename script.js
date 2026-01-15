let display = document.getElementById("display");

function appendValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}