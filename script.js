function getWeather() {
    const apiKey = 'c3f1ced5cba9eba5105847585f57edc5'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherCard = document.getElementById('weatherCard');
            weatherCard.innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].main}</p>
            `;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            const weatherCard = document.getElementById('weatherCard');
            weatherCard.innerHTML = `<p>${error.message}. Please try again.</p>`;
        });
}
