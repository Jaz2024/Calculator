let prevNum = "";
let currNum = "";
let operator = null;

let input = document.querySelector("#input");

let numbers = document.querySelectorAll(".number");
numbers.forEach((num) => {
    num.addEventListener("click", function(e) {
        
        const value = e.target.textContent;

        if(operator === null) {
            prevNum += value;
            input.value = prevNum;
            console.log(prevNum);
        } else {
            currNum += value;
            input.value = currNum;
            console.log(currNum);
        }
    });
});


let operators = document.querySelectorAll(".operator");
operators.forEach((opt) => {
    opt.addEventListener("click", function(e) {

        operator = e.target.textContent;

        if (prevNum === "") return;

        if (currNum !== "") {
            prevNum = operate(prevNum, operator, currNum).toString();
            console.log(prevNum);
            currNum = "";
            input.value = prevNum;
        }
        
        console.log(operator);

    });
});



function add(num1,num2) {
    return prevNum = num1 + num2;
};

function subtract(num1,num2) {
    return prevNum =  num1 - num2;
};

function multiply(num1,num2) {
    return prevNum =  num1 * num2;
}

function divide(num1,num2) {
    return prevNum =  num1 / num2;
}


function operate(num1, opt, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (opt === "+") return add(num1, num2);
    if (opt === "-") return subtract(num1, num2);
    if (opt === "x") return multiply(num1, num2);
    if (opt === "/") return divide(num1, num2);
}


let ac = document.querySelector("#ac");
ac.addEventListener("click", function () {
    prevNum = "";
    currNum = "";
    operator = null;
    input.value = "";
    console.clear();
});

let equal = document.querySelector("#equal");
equal.addEventListener("click", function () {
    if (prevNum === "" || currNum === "" || operator === null) return;

    prevNum = operate(prevNum, operator, currNum).toString();
    console.log(prevNum);
    currNum = "";
    operator = null;
    input.value = prevNum;

});




