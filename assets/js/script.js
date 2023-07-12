var searchBtn = document.querySelector(".btn")
var cityInput = document.getElementById("search")

searchBtn.addEventListener("click", function() {
    var cityName = cityInput.value
    fetchWeather(cityName)
})

function fetchWeather(cityName) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=ac9b7ed841a7d35e1e2d6566f6679201")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
}