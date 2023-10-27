
const apikey="7206beaddf6d17fc3611f6beeb67c4d3";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function cheackWeather(city){
  const response=await fetch(apiurl+city+`&appid=${apikey}`);
  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

  }else{
    document.querySelector(".weather").style.display="block";

  }

  var data=await response.json();

  // console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";


  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="cloud.png";
  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src="clear_img.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="rain_img.png";
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="mist.png";
  }
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";

}
searchBtn.addEventListener("click",()=>{
  cheackWeather(searchBox.value);

});


// const apiKey = "5327e387f438b4f1f6d673e5839d9df3"
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchbox = document.querySelector(".search input");
// const searchbtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
// const dateElement = document.querySelector(".date");
// const clockElement = document.getElementById('clock');
// function displayTodayDate() {
//   const options = {weekday: "long", month: "long", day: "numeric", year: "numeric" };
//   const today = new Date();
//   dateElement.innerHTML = today.toLocaleDateString(undefined, options);
//   const timing = {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//   };
//   const timeString = today.toLocaleTimeString('en-US', timing);
//   clockElement.textContent = timeString;
//   console.log(today);
// }
// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   if (response.status == 404 ) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   }
//   else {
//     document.querySelector(".weather").style.display = "block";
//   }
//   var data = await response.json();
//   console.log(data);
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//   document.querySelector(".weathertype").innerHTML = data.weather[0].main;
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
//   if (data.weather[0].main == "Clouds") {
//     weatherIcon.src = "img/clouds.png";
//   } else if (data.weather[0].main == "Clear") {
//     weatherIcon.src = "img/clear.png";
//   } else if (data.weather[0].main == "Rain") {
//     weatherIcon.src = "img/rain.png";
//   } else if (data.weather[0].main == "Drizzle") {
//     weatherIcon.src = "img/drizzle.png";
//   } else if (data.weather[0].main == "Mist") {
//     weatherIcon.src = "img/mist.png";
//   }
//   document.querySelector(".error").style.display = "none";
//   document.querySelector(".weather").style.display = "block";
// }
// searchbtn.addEventListener("click", () => {
//   checkWeather(searchbox.value);
//   displayTodayDate();
//   setInterval(displayTodayDate, 1000);
// });


















// const apikey = "7206beaddf6d17fc3611f6beeb67c4d3";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function cheackWeather(city) {
//   const response = await fetch(apiurl + city + `&appid=${apikey}`);
//   if(response.status==404){
//     document.querySelector(".error").style.display="block";
//     document.querySelector(".weather").style.display="none";
//   }else{
//     document.querySelector(".weather").style.display="block"

//   }
//   var data = await response.json();
//   // console.log(data);
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//   if (data.weather[0].main == "Clouds") {
//     weatherIcon.src = "cloud.png";
//   } else if (data.weather[0].main == "Clear") {
//     weatherIcon.src = "clear_img.png";
//   } else if (data.weather[0].main == "Rain") {
//     weatherIcon.src = "rain_img.png";
//   } else if (data.weather[0].main == "Mist") {
//     weatherIcon.src = "";
//   }
//   document.querySelector(".weather").style.display="block"
//   document.querySelectorAll(".error").style.display="none";
// }

// searchBtn.addEventListener("click", () => {
//   cheackWeather(searchBox.value);
// });








// const apikey = "7206beaddf6d17fc3611f6beeb67c4d3";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//   const response = await fetch(apiurl + city + `&appid=${apikey}`);

//   if (response.status === 404) {
//     document.querySelectorAll(".error").forEach(element => {
//       element.style.display = "block";
//     });

//     document.querySelectorAll(".weather").forEach(element => {
//       element.style.display = "none";
//     });
//   } else {
//     var data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     // Convert temperature from Kelvin to Celsius
//     const tempCelsius = Math.round(data.main.temp - 273.15);
//     document.querySelector(".temp").innerHTML = tempCelsius + " °C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//     if (data.weather[0].main == "Clouds") {
//       weatherIcon.src = "cloud.png";
//     } else if (data.weather[0].main == "Clear") {
//       weatherIcon.src = "clear_img.png";
//     } else if (data.weather[0].main == "Rain") {
//       weatherIcon.src = "rain_img.png";
//     } else if (data.weather[0].main == "Mist") {
//       weatherIcon.src = "mist.png";
//     }

//     document.querySelectorAll(".weather").forEach(element => {
//       element.style.display = "block";
//     });

//     document.querySelectorAll(".error").forEach(element => {
//       element.style.display = "none";
//     });
//   }
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });
















