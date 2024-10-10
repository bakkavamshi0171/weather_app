
let displayDiv = document.getElementById("displayDiv");
let errorHandle = document.getElementById("errorHandle")
let form = document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  debugger
  let city = document.getElementById("city").value;
  if (city) {
    checkWheather(city);
  } else {
    alert("enter the city name");
  }
});

async function checkWheather(city) {
  const apiKey = "64880e19a1f908d59e60f2967b602ac9";
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const data = await fetch(Url);
    if (!data.ok) {
      throw new Error("city not Found");
    }
    let getData = await data.json();
    
    display(getData);
  } catch (error) {
    displayDiv.style.display = "none";
    errorHandle.style.display = "block";
    errorMsg.innerText = error.message;
  }
}
function display(data) {
  displayDiv.style.display = "flex";
  displayDiv.style.flexDirection = "column"
    errorHandle.style.display = "none";
  console.log(data);
  const { main, weather, wind, name } = data;
  let speed = document.getElementById("speed");
  let img = document.getElementById("humidityImage");
  let temp = document.getElementById("temp");
  let cityName = document.getElementById("cityName");
  let description = document.getElementById("description");
  speed.innerHTML = wind.speed;
  temp.innerHTML = main.temp;
  cityName.innerText = name;
  description.innerHTML = `${weather[0].description}  Humidity - ${main.humidity}`;

  if (weather[0].main === "sunny") {
    img.setAttribute("src", "sunny_2580627.png");
  } else if (weather[0].main === "Clouds") {
    img.setAttribute("src", "cloudsun.jpeg");
  } else if (weather[0].main === "Rain") {
    img.setAttribute("src", "rain_9132779.png");
  } else if (weather[0].main == "clear") {
    img.setAttribute("src", "sky_16227785.png");
  } else {
    img.setAttribute("src", "cloud-sun_10497846.png");
  }

  let temp1 = document.getElementById("temp1");
  temp1.style.display = "block";
  let speed1 = document.getElementById("speed1");
  speed1.style.display = "block";
  
}
