let display = document.getElementById("displayValue");
let calcNum = document.querySelectorAll(".calNum");
let calcOp = document.querySelectorAll(".calOp");
let clearBtn = document.getElementById("clear");
let fullClearBtn = document.getElementById("fullClear");
let equalsBtn = document.getElementById("eq");
let toggleBtn = document.getElementById("neg")

let firstOperater = null;
let firstNum = "";
let secondNum = "";
let clear = false;

calcNum.forEach((element) => {
    element.addEventListener("click", () => displayNum(element.textContent));

});

calcOp.forEach((element) => {
    element.addEventListener("click", () => setOperater(element.textContent));
    console.log(element);
});

equalsBtn.addEventListener("click", equals)
clearBtn.addEventListener("click", clearDisplay);
fullClearBtn.addEventListener("click", fullClearDisplay);
toggleBtn.addEventListener("click", toggleNegative)

function operate(num1, num2, func) {
    switch(func){
        case "+":
            return parseInt(num1) + parseInt(num2);
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "X":
            return num1 * num2;
        case "%":
            return num1 % num2;
        default:
            return "ERROR";
    }
}

function displayNum(num){
    if(clear){
        clear = false;
        clearDisplay();
    }
    display.textContent += num;
}

function clearDisplay() {
    display.textContent = "";
}

function toggleNegative() {
    if (display.textContent === "" ){
        display.textContent += "-";
    }
    let toggle = display.textContent * (-1);
    display.textContent = toggle;
}

function fullClearDisplay() {
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    firstOperater = null;
    clear = false;
}

function setOperater(op) {
        if (firstOperater !== null) {
            equals();
        }
        firstNum = display.textContent;
        firstOperater = op;
        clear = true;
}

function equals() {
    secondNum = display.textContent;
    display.textContent = operate(firstNum, secondNum, firstOperater)
    firstOperater = null;
    clear = true;
}




