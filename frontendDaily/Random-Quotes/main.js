var address = "https://api.quotable.io/quotes/random?limit=100";
var quotes = [];
var currentIndex = 0;
var colors = [
  "#C62828",
  "#AD1457",
  "#4A148C",
  "#311B92",
  "#1A237E",
  "#0D47A1",
  "#01579B",
  "#004D40",
  "#1B5E20",
  "#F9A825",
  "#E65100",
  "#263238",
];

function getQuotes() {
  return fetch(address)
    .then((response) => response.json())
    .then((data) => (quotes = data))
    .then(() => change());
}

function change() {
  var count = quotes.length;
  var index = Math.floor(Math.random() * count);
  currentIndex = index;

  if (currentIndex === quotes) {
    change();
  }
  document.getElementById("text").innerHTML = quotes[index].content;
  document.getElementById("author").innerHTML = "-" + quotes[index].author;

  document.body.style.setProperty(
    "background-color",
    colors[Math.floor(Math.random() * colors.length)],
    "important"
  );
}

function share() {
  var text = document.getElementById("text").innerHTML;
  window.location.href =
    "http://twitter.com/intent/tweet?text=" +
    encodeURIComponent('"' + text + '"') +
    " @osman_tuysuz";
}

getQuotes();
