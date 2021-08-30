const displayInput = () => {
    const locationInput = document.getElementById('input-field');
    const location = locationInput.value;
    const locationField = document.getElementById('location-field');
    locationField.innerText = location;
    locationInput.value = '';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location},&units=metric&APPID=e2e88f5137a3d3bf6000e339ce036628`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeatherData(data));
}

const displayWeatherData = temp => {
    const temparatureField = document.getElementById('temparature');
    temparatureField.innerHTML = `
    <h3><span>${temp.main.temp}</span>&deg;C</h3>
    `;
    const weatherTypeField = document.getElementById('weather-type');
    weatherTypeField.innerText = temp.weather[0].main;
    document.getElementById('icon-field').innerHTML = `
        <img src="https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png" alt="" />
        `;

} 

