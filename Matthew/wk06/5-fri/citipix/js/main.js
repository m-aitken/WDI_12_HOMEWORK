var cities = ["Austin", "Los Angeles", "New York", "San Francisco", "Sydney"]
var option = document.getElementById("city-type")

for (var i=0; i<cities.length; i++) {
  var select = cities[i];
  var element = document.createElement("option");
  element.textContent = select;
  element.value = select;
  option.appendChild(element);
}

 
var city = document.getElementById("city-type").value;

if (city === "Austin") {
  var body = document.body;
  body.classList.add("nyc");
}