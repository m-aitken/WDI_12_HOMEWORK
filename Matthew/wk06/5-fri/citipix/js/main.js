var cities = ["Austin", "Los Angeles", "New York", "San Francisco", "Sydney"]
var option = document.getElementById("city-type")

for (var i=0; i<cities.length; i++) {
  var select = cities[i];
  var element = document.createElement("option");
  element.textContent = select;
  element.value = select;
  option.appendChild(element);
}

 
var city = document.getElementById("city-type");

city.addEventListener("change", function() {

  if (city.value === "Austin") {
    document.body.style.background = "url(images/austin.jpg)"
  } 
  else if (city.value === "Los Angeles") {
    document.body.style.background = "url(images/la.jpg)"
  }
  else if (city.value === "New York") {
    document.body.style.background = "url(images/nyc.jpg)"
  }
  else if (city.value === "San Francisco") {
    document.body.style.background = "url(images/sf.jpg)"
  }
  else if (city.value === "Sydney") {
    document.body.classList.add('sydney')
  }
})
