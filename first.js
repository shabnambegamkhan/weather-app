

//this is api key
const apiKey = "617a81e260f67ab7b6b4944367c19e3a";


document.querySelector('.input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const city = e.target.value;
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert(error.message);
        });
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const weatherDescription = weather[0].description;

    document.querySelector('.box .para').innerHTML = `
        <h1>Weather in ${name}</h1>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${weatherDescription}</p>
    `;
}
