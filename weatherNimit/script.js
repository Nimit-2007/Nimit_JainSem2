const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const feelsLike = document.getElementById('feelsLike');

const apiKey = 'eb1cb267b6464d0f9fc104629260402';

function getWeather() {
    const city = cityInput.value.trim();

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    cityName.textContent = 'Loading...';
    temperature.textContent = '--°C';
    description.textContent = '';

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found!');
                cityName.textContent = 'City Name';
                temperature.textContent = '--°C';
                description.textContent = 'Weather Description';
                return;
            }

            cityName.textContent = `${data.location.name}, ${data.location.country}`;
            temperature.textContent = Math.round(data.current.temp_c) + '°C';
            description.textContent = data.current.condition.text;

            weatherIcon.innerHTML = `<img src="https:${data.current.condition.icon}" alt="Weather icon">`;

            humidity.textContent = `${data.current.humidity}%`;
            windSpeed.textContent = `${data.current.wind_kph} km/h`;
            feelsLike.textContent = `${Math.round(data.current.feelslike_c)}°C`;

            document.getElementById('weatherInfo').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('weatherInfo').style.opacity = '1';
            }, 100);
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
            console.log(error);
        });
}

searchBtn.addEventListener('click', getWeather);

cityInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
