let currentVal = 0;
let result = 0;
let isClickSymbol = false;
let isClickNumber = false;
let selectedSymbol = "";

function ClickNumber(val) {
  if (isClickSymbol && !isClickNumber) {
    $("#inputVal").text(0);
  }

  let inputVal = $("#inputVal").text();

  if (inputVal == 0) {
    $("#inputVal").text(val);
  } else {
    $("#inputVal").text(inputVal + "" + val);
  }

  isClickNumber = true;
}

function ClickSymbol(val) {
  let inputVal = $("#inputVal").text();

  switch (val) {
    case 1:
      currentVal = 0;
      result = 0;
      $("#inputVal").text(0);
      break;
    case 2:
      inputVal = -1 * inputVal;
      $("#inputVal").text(inputVal);
      break;

    case 3:
      selectedSymbol = 3;
      inputVal = inputVal / 100;
      $("#inputVal").text(inputVal);
      break;

    case 4:
      selectedSymbol = 4;
      if (!isClickSymbol) {
        currentVal = inputVal;
      } else if (isClickSymbol && isClickNumber) {
        result = parseFloat(currentVal) / parseFloat(inputVal);
        currentVal = result;
        $("#inputVal").text(currentVal);
      }
      isClickSymbol = true;
      isClickNumber = false;
      break;

    case 5:
      selectedSymbol = 5;
      if (!isClickSymbol) {
        currentVal = inputVal;
      } else if (isClickSymbol && isClickNumber) {
        result = parseFloat(currentVal) * parseFloat(inputVal);
        currentVal = result;
        $("#inputVal").text(currentVal);
      }
      isClickSymbol = true;
      isClickNumber = false;
      break;

    case 6:
      selectedSymbol = 6;
      if (!isClickSymbol) {
        currentVal = inputVal;
      } else if (isClickSymbol && isClickNumber) {
        result = parseFloat(currentVal) - parseFloat(inputVal);
        currentVal = result;
        $("#inputVal").text(currentVal);
      }
      isClickSymbol = true;
      isClickNumber = false;
      break;

    case 7:
      selectedSymbol = 7;
      if (!isClickSymbol) {
        currentVal = inputVal;
      } else if (isClickSymbol && isClickNumber) {
        result = parseFloat(currentVal) + parseFloat(inputVal);
        currentVal = result;
        $("#inputVal").text(currentVal);
      }
      isClickSymbol = true;
      isClickNumber = false;
      break;

    case 8:
      ClickSymbol(selectedSymbol);
      break;

    case 9:
      if (!inputVal.includes(".")) {
        inputVal += ".";
        $("#inputVal").text(inputVal);
      }
      break;
  }
}
