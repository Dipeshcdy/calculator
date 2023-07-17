let result = document.getElementById("result");
let expression = "";

function clearResult() {
  expression = "";
  updateResult();
}

function deleteLastEntry() {
  expression = expression.slice(0,-1);
  updateResult();
}

function appendNumber(number) {
  // expression=expression+number;
  expression += number;
  updateResult();
}

function appendOperator(operator) {
  expression += operator;
  updateResult();
}

function calculate() {
  try {
    result.value = eval(expression);
  } catch (error) {
    result.value = "Error";
  }
}


function updateResult() {
    // console.log(expression);
  result.value = expression;
}
