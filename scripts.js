const apiKey = "cb07ddc375006f880ec8f6c4055a19f3";

const convertToCelsius = (temp) => {
    const result = `${(temp - 273.15).toFixed(1)}°C`;
    return result;
}

const showWeather = (weather) => {
    console.log(weather)
    const city = document.getElementById("CityName")
    const clouds = document.getElementById("Clouds") 
    const country = document.getElementById("Country")
    const temp = document.getElementById("Temp")
    const tempMax = document.getElementById("Temp_Max")
    const tempMin = document.getElementById ("Temp_Min")
    const windSpeed = document.getElementById ("WindSpeed")
    city.textContent = weather.name;
    clouds.textContent = weather.clouds.all + "%"
    country.textContent = weather.sys.country;
    temp.textContent = weather.main.temp
    tempMax.textContent = weather.main.temp_max 
    tempMin.textContent = weather.main.temp_min 
    windSpeed.textContent = weather.wind.speed + "m/s"
    temp.textContent = convertToCelsius(weather.main.temp)
    tempMax.textContent = convertToCelsius(weather.main.temp_max)
    tempMin.textContent = convertToCelsius(weather.main.temp_min)
}

const getWeatherByLocation = (info) => {
    const lon = info.coords.longitude;
    const lat = info.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(url)
    .then((res)=> res.json())
    .then((res) => showWeather(res));
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos)=>getWeatherByLocation(pos))
}
getMyLocation();



