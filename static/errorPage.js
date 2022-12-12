const options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: Infinity
};
  
navigator.geolocation.getCurrentPosition(success, error, options);

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function success(position) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5`
      // "https://api.openweathermap.org/data/2.5/weather?q=Water+Valley&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var weather = document.getElementById("weather")
        var city = document.getElementById("city");
        var temp = document.getElementById("temp");
        var humidity = document.getElementById("humid");
        var windSpeed = document.getElementById("windSpeed");
        weather.innerText = data.weather[0].description
        city.innerText = `${data.name}`;
        temp.innerText = `${Math.round(data.main.temp)}`;
        humidity.innerText = `${data.main.humidity}`;
        windSpeed.innerText = `${Math.round(data.wind.speed)}`;
      });
}

const date = new Date();

var days = date.getDay()
var dayString = ""
if (days == 1) {
    dayString = "Monday"
} else if (days == 2) {
    dayString = "Tuesday"
} else if (days == 3) {
    dayString = "Wednesday"
} else if (days == 4) {
    dayString = "Thursday"
} else if (days == 5) {
    dayString = "Friday"
} else if (days == 6) {
    dayString = "Saturday"
} else {
    dayString = "Sunday"
}
var dayhtml = document.getElementById("day")
dayhtml.innerText = dayString.toUpperCase()

let dayTime = date.getDate();
let monthTime = date.getMonth() + 1;
let yearTime = date.getFullYear();

var monthString = ""
if (monthTime == 1) {
    monthString = "JANUARY"
} else if (monthTime == 2) {
    monthString = "FEBRUARY"
} else if (monthTime == 3) {
    monthString = "MARCH"
} else if (monthTime == 4) {
    monthString = "APRIL"
} else if (monthTime == 5) {
    monthString = "MAY"
} else if (monthTime == 6) {
    monthString = "JUNE"
} else if (monthTime ==7) {
    monthString = "JULY"
} else if (monthTime ==8) {
    monthString = "AUGUST"
} else if (monthTime ==9) {
    monthString = "SEPTEMBER"
} else if (monthTime ==10) {
    monthString = "OCTOBER"
} else if (monthTime ==11) {
    monthString = "NOVEMBER"
} else if (monthTime ==12) {
    monthString = "DECEMBER"
}

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${monthString} ${dayTime}, ${yearTime}`;
var datehtml = document.getElementById("date")
datehtml.innerText = currentDate

var counterTimes = 0
function bodyHtml() {
    counterTimes += 1
    console.log(counterTimes)
    if (counterTimes == 1) {
        alert("Click the header when you are ready to leave!")
    }
}