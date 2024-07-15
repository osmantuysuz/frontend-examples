var heart = 3;
var random = 0;

function guess() {
  var guess = document.getElementById("guess").value;

  if (guess > 0) {
    if (heart === 3) {
      random = Math.floor(Math.random() * 10) + 1;
    }
    if (guess == random) {
      document.getElementById("result").innerHTML = "Tebrikler doğru bildiniz.";
      showButton("btn-again");
      hideButton("btn-guess");
    } else {
      var element = document.querySelectorAll("#hearts > i")[heart - 1];
      element.classList.remove("heart-red");
      element.classList.add("heart-grey");
      heart--;

      if (heart > 0) {
        document.getElementById("result").innerHTML = "Yanlış tahmin!";
        document.getElementById("guess").value = "";
      } else {
        showButton("btn-again");
        hideButton("btn-guess");
        document.getElementById("result").innerHTML =
          "Yanlış bildiniz. Doğru cevap: " + random;
      }

      if (heart === 0) {
        document.getElementById("result").innerHTML =
          "Maalesef doğru tahmin edemediniz.";
      }
    }
  }
}

function again() {
  heart = 3;
  for (let index = 0; index < 3; index++) {
    var element = document.querySelectorAll("#hearts > i")[index];
    element.classList.remove("heart-grey");
    element.classList.add("heart-red");
  }

  hideButton("btn-again");
  showButton("btn-guess");
  document.getElementById("guess").value = "";
  document.getElementById("result").innerHTML = "-";
}

function showButton(id) {
  document.getElementById(id).classList.add("btn-show");
  document.getElementById(id).classList.remove("btn-hide");
}

function hideButton(id) {
  document.getElementById(id).classList.add("btn-hide");
  document.getElementById(id).classList.remove("btn-show");
}
