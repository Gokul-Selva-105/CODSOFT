function addToExpression(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
    document.getElementById("result").value = eval(
      document.getElementById("result").value
    );
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearExpression() {
  document.getElementById("result").value = "";
}
