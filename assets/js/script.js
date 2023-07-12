// Search Section
var cityInput = document.getElementById("search")
var searchBtn = document.querySelector(".btn")
// Current forecast section
var searchInfo = document.querySelector(".searchInfo")
var weatherIcon = document.querySelector(".weatherIcon")
var temp = document.querySelector(".temp")
var humidity = document.querySelector(".humidity")
var wind = document.querySelector(".wind")

// Event listener to call fetchWeather() when search button is clicked
searchBtn.addEventListener("click", function() {
    var cityName = cityInput.value
    fetchWeather(cityName)
})

// Main function to call weather api and pull data
function fetchWeather(cityName) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=ac9b7ed841a7d35e1e2d6566f6679201")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
}