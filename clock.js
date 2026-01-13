

function checkreminders() {
  
  if (threetime > 700 && threetime < 900) {
    document.getElementById("wu").style.display = "block";
  }
  if (monthnum === 2 && dayNumber === 29) {
    document.getElementById("bd").style.display = "block";
  }
}
function updateClock() {
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  daynum = now.getDay();
  monthnum = now.getMonth();
  dayName = days[now.getDay()];
  monthName = months[now.getMonth()];
  dayNumber = now.getDate();
  year = now.getFullYear();
  let am = true;
  threetime = hours*100 + minutes;

  if (hours >= 12) {
    am = false;
    if (hours > 12) hours -= 12;
  }
  if (hours === 0) hours = 12;

  if (minutes < 10) minutes = "0" + minutes;

  document.getElementById("time").textContent =
    `${hours}:${minutes} ${am ? "AM" : "PM"}`;

  // ---- Date ----
  
  document.getElementById("date").textContent =
    `${dayName}, ${monthName} ${dayNumber}, ${year}`;
}
function checkND() {
  if (threetime >= 500 && threetime < 1700) {
    
    document.body.style.background = "linear-gradient(135deg, #00d9ffff, #ffd000ff)";
  }
  if (threetime >= 1700) {
    document.body.style.background = "linear-gradient(135deg, #102e33ff, #3f0b45ff)"
  }
  
  
}

let threetime = 0;
let now;

  // ---- Time ----
  let hours;
  let minutes ;
let days;
  let months;
  let daynum;
  let monthnum;
  let dayName;
  let monthName;
  let dayNumber;
  let year;
  document.getElementById("wu").style.display = "none";

  async function weather() {
const CITY = "Louisville";
const STATE = "CO";
const COUNTRY = "US";
const API = "df02ccd916ad8508c6ff2573d6f59772";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${STATE},${COUNTRY}&units=imperial&appid=${API}`;
    try {
    const response = await fetch(url);
    const data = await response.json();

    const current = Math.round(data.main.temp);
    const high = Math.round(data.main.temp_max);
    const low = Math.round(data.main.temp_min);
    condition = data.weather[0].main;
    const description = data.weather[0].description;

    document.getElementById("wtxt").textContent =
      `${current}° • H:${high}° L:${low}° • ${description}`;

}
 catch (error) {
  console.error(error);
}

  }
let condition;
function weatherimg() {
  if (condition === "Clear") {
  document.getElementById("wpic").src = "sun.png";
}
if (condition === "Clouds") {
  document.getElementById("wpic").src = "cloud.png";
}
if (condition === "Rain") {
  document.getElementById("wpic").src = "rain.gif";
  document.getElementById("weather").style.background = "linear-gradient(135deg, rgb(123, 123, 123), rgb(25, 0, 255))";
}
if (condition === "Drizzle") {
  document.getElementById("wpic").src = "rain.gif";
}
if (condition === "Thunderstorm") {
  document.getElementById("wpic").src = "boom.gif";
}
if (condition === "Snow") {
  document.getElementById("wpic").src = "snow.png";
  document.getElementById("weather").style.background = "linear-gradient(135deg, rgb(255, 255, 255), rgb(116, 103, 233))";
}
console.log(threetime);
}
let played = false;
function music() {
  
 

  if (threetime === 1911 && !played) {
    const randomAlarm = Math.floor(Math.random() * 10) + 1;
    
alarm.currentTime = 0;
    alarm.src = randomAlarm + ".mp3";
    alarm.load();
    alarm.play();
    played = true;
  }
  if (threetime !== 1850) {
    alarmPlayed = false;
  }
}
function unlockAudio() {
  alarm.play().catch(() => {});
  alarm.pause();
  alarm.currentTime = 0;
  alarm.src = "boot.mp3";
  alarm.play();
}
const alarm = document.getElementById("sound");
alarm.play();

function updateoff() {
  const overlay = document.getElementById("sleep");

  const screenOn =
    (threetime >= 730 && threetime < 900) ||
    (threetime >= 1800 && threetime < 2100);

  overlay.style.display = screenOn ? "none" : "block";
}
  
function run() {

updateClock();
updateoff();
music();
checkreminders();
checkND();
weather();
weatherimg();



}


setInterval(run, 1000);



