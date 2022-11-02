function showWeather(response) {
  document.querySelector(".city-label").innerHTML = response.data.name;
  document.querySelector(".current_temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".cityname").value;
  searchCity(city);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", handleSubmit);
