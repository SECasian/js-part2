let currentCityLS = localStorage.getItem("city");
// let currentCityTag = document.querySelector(".current-city");

if (currentCity === null) {
  currentCityLS = "București";
}

currentCity.innerHTML = currentCityLS;
displayCurrentWeather(currentCityLS);
console.log("adsa");
