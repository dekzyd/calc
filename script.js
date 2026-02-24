const body = document.querySelector('body');
let firstNum;
let secondNum;
let operator;


console.log('operate', operate('/', 100, 2))



// Util functions
function operate(operator, num1, num2) {
    let sum;
    switch (operator) {
        case '+':
            sum = add(num1, num2)
            break;
        case '-':
            sum = subtract(num1,num2)
            break;
         case '*':
            sum = multiply(num1, num2)
            break;
        case '/':
            sum = divide(num1,num2)
            break;
    
        default:
            break;
    }
    return sum

}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}