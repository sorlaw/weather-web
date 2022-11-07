let au = async function (cityName) {
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=406387d5a875ae15925e4dbf8323e1bb`);
  return weather;
};

function secFunction(event) {
  if (event.key == "Enter") {
    let name = document.getElementById("test").value;
    au(name)
      .then((response) => response.json())
      .then((resolve) => console.log(resolve));
  }
}

function cekCuaca(main, desc) {
  const Atmosphere = ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"];
  let check = Atmosphere.indexOf(main);
  console.log(check);
  if (check != -1) {
    return `<img src="assets/Mist.png" class="icon" />
    <div class="text-weather">
      <h1 class="main" id="main">${main}</h1>
      <h3 class="description" id="description">${desc}</h3>
    </div>`;
  } else {
    return `<img src="assets/${main}.png" class="icon" />
    <div class="text-weather">
      <h1 class="main" id="main">${main}</h1>
      <h3 class="description" id="description">${desc}</h3>
    </div>`;
  }
}

function myFunction() {
  let name = document.getElementById("test").value;

  au(name)
    .then((response) => response.json())
    .then(function (resolve) {
      console.log(resolve.weather[0].main);
    });
}

async function checkWeather() {
  let name = document.getElementById("test").value;

  let myPromise = au(name)
    .then((response) => response.json())
    .then((resolve) => resolve.weather[0].main);
  let description = au(name)
    .then((response) => response.json())
    .then((resolve) => resolve.weather[0].description);

  let main = await myPromise;
  let desc = await description;
  const elem = document.querySelector(".weather");
  elem.innerHTML = cekCuaca(main, desc);
}
