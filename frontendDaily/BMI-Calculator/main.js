function CalculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  if (weight > 0 && height > 0) {
    var result = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);
    document.getElementById("result").innerText = result;
    if (result < 18.5) {
      document.getElementById("result-statu").innerText = "Underweight";
      document.getElementById("result-statu").style.color = "#2196f3";
    } else if (result >= 18.5 && result < 25.0) {
      document.getElementById("result-statu").innerText = "Normal";
      document.getElementById("result-statu").style.color = "#43a047";
    } else if (result >= 25.0 && result < 30.0) {
      document.getElementById("result-statu").innerText = "Overweight";
      document.getElementById("result-statu").style.color = "#fb8c00";
    } else if (result >= 30.0) {
      document.getElementById("result-statu").innerText = "Obese";
      document.getElementById("result-statu").style.color = "#c62828";
    }
  }
}

function Reset() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("result-statu").innerText = "";
}
