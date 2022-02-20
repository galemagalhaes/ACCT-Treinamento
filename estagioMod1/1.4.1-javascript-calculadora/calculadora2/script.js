function insertValues(num) {
  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = input + num;
}

function calculate() {
  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = eval(input);
}

function clearInput() {
  document.getElementById('input-value').value = "";
}

function invert() {
  calculate()

  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = input * -1;
}

function back() {
  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = input.substring(0, input.length - 1);
}

