var cities = ["Austin", "Los Angeles", "New York", "San Francisco", "Sydney"]
var option = document.getElementById("city-type")

for (var i=0; i<cities.length; i++) {
  var select = cities[i];
  var element = document.createElement("option");
  element.textContent = select;
  element.value = select;
  option.appendChild(element);
}



// if citytype value = cityname
  