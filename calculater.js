let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}