const au = async function (cityName) {
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=406387d5a875ae15925e4dbf8323e1bb`);
  return weather;
};

const secFunction = async function (event) {
  if (event.key == "Enter") {
    let name = document.getElementById("test").value;

    let myPromise = au(name)
      .then((response) => response.json())
      .then((resolve) => resolve.weather[0].main);
    let description = au(name)
      .then((response) => response.json())
      .then((resolve) => resolve.weather[0].description);
    let humidity = au(name)
      .then((response) => response.json())
      .then((resolve) => resolve.main.humidity);
    let windspeed = au(name)
      .then((response) => response.json())
      .then((resolve) => resolve.wind.speed);
    let temp = au(name)
      .then((response) => response.json())
      .then((resolve) => Math.round(resolve.main.temp - 273.15));

    let main = await myPromise;
    let desc = await description;
    let hum = await humidity;
    let winds = await windspeed;
    let temperature = await temp;
    const elem = document.querySelector(".weather");
    const elem2 = document.querySelector(".descWeather");
    elem.classList.add("animate__fadeInUp");
    elem2.classList.add("animate__fadeInUp");
    elem.innerHTML = cekCuaca(main, desc);
    elem2.innerHTML = cekCuaca2(hum, winds, temperature);
    setTimeout(() => {
      elem.classList.remove("animate__fadeInUp");
      elem2.classList.remove("animate__fadeInUp");
    }, 1000);
  }
};

function cekCuaca(main, desc) {
  const Atmosphere = ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"];
  let check = Atmosphere.indexOf(main);
  if (check != -1) {
    return `<img src="assets/Mist.png" class="icon" />
    <div class="text-weather">
      <h1 class="main" id="main">${main}</h1>
      <h3 class="description" id="description">${desc}</h3>
    </div>`;
  } else {
    return `<img src="assets/${main}.png" class="icon" style="height: 100px" />
    <div class="text-weather">
      <h1 class="main" id="main">${main}</h1>
      <h3 class="description" id="description">${desc}</h3>
    </div>`;
  }
}

function cekCuaca2(humidity, windspeed, temperature) {
  return ` <div class="humidity">
  <img src="assets/humidity.png" alt="" style="width: 50px;" class="icon"/>
  <span class="text-desc">${humidity}%</span>
</div>
<div class="windspeed">
  <img src="assets/winds-weather-symbol.png" alt="" style="width: 50px;" class="icon"/>
  <span class="text-desc">${windspeed} km/h</span>
</div>
<div class="temp">
  <img src="assets/thermometer.png" alt="" style="width: 50px;" class="icon"/>
  <span class="text-desc">${temperature}°C</span>
</div>`;
}

const checkWeather = async function () {
  let name = document.getElementById("test").value;

  let myPromise = au(name)
    .then((response) => response.json())
    .then((resolve) => resolve.weather[0].main);
  let description = au(name)
    .then((response) => response.json())
    .then((resolve) => resolve.weather[0].description);
  let humidity = au(name)
    .then((response) => response.json())
    .then((resolve) => resolve.main.humidity);
  let windspeed = au(name)
    .then((response) => response.json())
    .then((resolve) => resolve.wind.speed);
  let temp = au(name)
    .then((response) => response.json())
    .then((resolve) => Math.round(resolve.main.temp - 273.15));

  let main = await myPromise;
  let desc = await description;
  let hum = await humidity;
  let winds = await windspeed;
  let temperature = await temp;
  const elem = document.querySelector(".weather");
  const elem2 = document.querySelector(".descWeather");
  elem.classList.add("animate__fadeInUp");
  elem2.classList.add("animate__fadeInUp");
  elem.innerHTML = cekCuaca(main, desc);
  elem2.innerHTML = cekCuaca2(hum, winds, temperature);
  setTimeout(() => {
    elem.classList.remove("animate__fadeInUp");
    elem2.classList.remove("animate__fadeInUp");
  }, 1000);
};
