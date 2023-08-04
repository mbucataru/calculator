let firstNum = "";
let secondNum = "";
let operator = "blank";
const blank = "";
const firstBlank = "blank"
function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    if (b == 0)
        return "Really? Refresh the page";
    return a / b;
}

function operate(firstNum, secondNum, operator)
{
    if (operator == "+")
        return add(firstNum, secondNum);
    else if (operator == "-")
        return subtract(firstNum, secondNum);
    else if (operator == "x")
        return multiply(firstNum, secondNum);
    else if (operator == "/")
        return divide(firstNum, secondNum);
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display")
display.textContent = "0";

function populateOperation(e)
{
    if (firstNum != "Really? Refresh the page")
    {
        let input = e.target.textContent
        if (!(isNaN(input)))
        {
            if (firstNum == blank || operator == firstBlank)
            {
                firstNum += input;
            }
            else 
            {
                secondNum += input;
            }
            if (operator == firstBlank)
            {
                display.textContent = `${firstNum}`;
            }
            else
            {
                display.textContent = `${secondNum}`;
            }
        }
        else if (isNaN(input))
        {
            if (input == "C")
            {
                display.textContent = "0";
                firstNum = blank;
                secondNum = blank;
                operator = firstBlank;
            }
            else if (input == "=")
            {
                if (firstNum != blank && secondNum != blank && operator != blank)
                {
                    firstNum = operate(+firstNum, +secondNum, operator);
                    display.textContent = `${firstNum}`;
                    secondNum = blank;
                    operator = blank;
                }
            }
            // any operator
            else
            {
                if (firstNum != blank && secondNum != blank && operator != blank)
                {
                    firstNum = operate(+firstNum, +secondNum, operator);
                    display.textContent = `${firstNum}`;
                    secondNum = blank;
                    operator = blank;
                }
                console.log("this is happening?")
                operator = input;
            }
        } 
    }
}

buttons.forEach(button => button.addEventListener('click', populateOperation));