// 1. Find the shortest and longest word in a slogan
function findWords() {
  var str = document.getElementById("text").value.trim();
  if (str == "") {
    alert("Please type a slogan");
    return;
  }
  var words = str.split(/\s+/);
  var shortest = words[0];
  var longest = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  document.getElementById("shortest").innerHTML = shortest;
  document.getElementById("longest").innerHTML = longest;
}
 
// 2. BMI = weight / (height * height)
function calculate() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }
  var bmi = weight / (height * height);
  var type;
  if (bmi < 18) {
    type = "Underweight";
  } else if (bmi <= 25) {
    type = "Normal";
  } else if (bmi <= 30) {
    type = "Overweight";
  } else {
    type = "Obese";
  }
  document.getElementById("score").innerHTML = bmi.toFixed(2);
  document.getElementById("type").innerHTML = type;
 
  // colour the matching row of the chart
  var names = ["Underweight", "Normal", "Overweight", "Obese"];
  for (var i = 0; i < names.length; i++) {
    document.getElementById("row-" + names[i]).style.backgroundColor = "";
  }
  document.getElementById("row-" + type).style.backgroundColor = "#b7d3ab";
}
 
// 3. Grid of random saplings and trees
function grow() {
  var rows = parseInt(document.getElementById("rows").value);
  var cols = parseInt(document.getElementById("columns").value);
  if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1 || rows > 10 || cols > 10) {
    alert("Please enter rows and columns between 1 and 10");
    return;
  }
  var arr = ["&#127793;", "&#127795;"];
  var garden = document.getElementById("garden");
  garden.innerHTML = "";
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var number = Math.floor(Math.random() * 2);
      garden.innerHTML += arr[number] + " ";
    }
    garden.innerHTML += "<br>";
  }
}
 
// 4. Rupees to dollars and dollars to rupees
function convert() {
  var amount = parseFloat(document.getElementById("data").value);
  if (isNaN(amount) || amount < 0) {
    alert("Please enter a valid amount");
    return;
  }
  var from = document.getElementById("from");
  var to = document.getElementById("to");
  var fromValue = from[from.selectedIndex].value;
  var toValue = to[to.selectedIndex].value;
  var result;
  if (fromValue == toValue) {
    result = amount;
  } else if (fromValue == "INR") {
    result = amount * 0.015;
  } else {
    result = amount * 67.12;
  }
  document.getElementById("answer").innerHTML = result.toFixed(2) + " " + toValue;
}
 
// 5. Flip between Education (heads) and Healthcare (tails)
var heads = 0;
var tails = 0;
document.getElementById("flip").addEventListener("click", flipFunction);
 
function flipFunction() {
  var coin = document.getElementById("coin");
  if (Math.random() < 0.5) {
    coin.innerHTML = "Education";
    heads++;
    document.getElementById("num_heads").innerHTML = heads;
  } else {
    coin.innerHTML = "Healthcare";
    tails++;
    document.getElementById("num_tails").innerHTML = tails;
  }
}
 
// 6. Donation total with an optional extra for running costs
document.getElementById("donateBtn").addEventListener("click", calculateDonation);
 
function calculateDonation() {
  var kits = parseInt(document.getElementById("kits").value) || 0;
  var meals = parseInt(document.getElementById("meals").value) || 0;
  var care = parseInt(document.getElementById("care").value) || 0;
  var extra = parseInt(document.querySelector('input[name="extra"]:checked').value);
  if (kits < 0 || meals < 0 || care < 0 || kits + meals + care == 0) {
    alert("Please enter how many you want to sponsor");
    return;
  }
  var cost = kits * 800 + meals * 450 + care * 1200;
  var extraAmount = cost * extra / 100;
  var total = cost + extraAmount;
  document.getElementById("price").innerHTML = "&#8377;" + total.toFixed(2);
  document.getElementById("details").innerHTML = "Programmes: &#8377;" + cost.toFixed(2) +
    " + Extra (" + extra + "%): &#8377;" + extraAmount.toFixed(2);
}
 