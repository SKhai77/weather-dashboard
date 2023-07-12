// Search Section
var cityInput = document.getElementById("search")
var searchBtn = document.querySelector(".btn")
// Current forecast section
var searchInfo = document.querySelector(".searchInfo")
var weatherIcon = document.querySelector(".weatherIcon")
var temp = document.querySelector(".temp")
var humidity = document.querySelector(".humidity")
var wind = document.querySelector(".wind")
// Future forecast section
var forecast = document.querySelectorAll(".forecast")

// Event listener to call fetchWeather() when search button is clicked
searchBtn.addEventListener("click", function() {
    var cityName = cityInput.value
    fetchWeather(cityName)
})

// Main function to call weather api and pull data
function fetchWeather(cityName) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=ac9b7ed841a7d35e1e2d6566f6679201&units=imperial")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        // Data format
        var currentDate = new Date(data.list[0].dt * 1000)
        var month = currentDate.getMonth() + 1
        var day = currentDate.getDate()
        var year = currentDate.getFullYear()
        searchInfo.innerHTML = data.city.name + " - " + "(" + month + "/" + day + "/" + year + ")"
        weatherIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png")
        weatherIcon.setAttribute("alt", data.list[0].weather[0].description)
        temp.innerHTML = "Temp: " +  Math.floor(data.list[0].main.temp) + "&#176F";
        humidity.innerHTML = "Humidity: " + Math.floor(data.list[0].main.humidity) + "%";
        wind.innerHTML = "Wind: " + Math.floor(data.list[0].wind.speed) + "mph";
        for(var i = 0; i < forecast.length; i++) {
            forecast[i].innerHTML = ""
            const dayIndex = i * 8 + 4;
            var dayDate = new Date(data.list[dayIndex].dt * 1000)
            var forecastMonth =  dayDate.getMonth() + 1
            var forecastDay = dayDate.getDate()
            var forecastYear =  dayDate.getFullYear()
            
            
            var forecastDate = document.createElement("b")
            var forecastImg = document.createElement("img")
            var forecastTemp = document.createElement("p")
            var forecastHumidity = document.createElement("p")
            var forecastWind = document.createElement("p")
            
            forecastDate.innerHTML = "(" + forecastMonth + "/" + forecastDay + "/" + forecastYear + ")"
            forecastImg.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[dayIndex].weather[0].icon + "@2x.png")
            forecastImg.setAttribute("alt", data.list[dayIndex].weather[0].description)
            forecastTemp.innerHTML = "Temp: " +  Math.floor(data.list[dayIndex].main.temp) + "&#176F";
            forecastHumidity.innerHTML = "Humidity: " +  Math.floor(data.list[dayIndex].main.humidity) + "%";
            forecastWind.innerHTML = "Wind: " +  Math.floor(data.list[dayIndex].wind.speed) + "mph";
            
            forecast[i].append(forecastDate)
            forecast[i].append(forecastImg)
            forecast[i].append(forecastTemp)
            forecast[i].append(forecastHumidity)
            forecast[i].append(forecastWind)

        }
    })
}