let oradeaButton = document.querySelector(".oradea");
let timișoaraButton = document.querySelector(".timisoara");
let bucurestibutton = document.querySelector(".bucharest");
let currentCity = document.querySelector(".current-city");

function handleCityChange(city) {
  currentCity.innerHTML = city;
  displayCurrentWeather(city);
  localStorage.setItem("city", city);
}

oradeaButton.addEventListener("click", function (eventDetails) {
  handleCityChange("Oradea");
});
timișoaraButton.addEventListener("click", function () {
  handleCityChange("Timișoara");
});
bucurestibutton.addEventListener("click", function () {
  handleCityChange("București");
});
