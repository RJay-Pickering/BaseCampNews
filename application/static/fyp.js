console.log(window.innerWidth)

navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var city = document.getElementById("city");
      var temp = document.getElementById("temp");
      city.innerText = `City: ${data.name}`;
      temp.innerText = `Current Temperature: ${Math.round(data.main.temp)}°F`;
    });
}

const fore = document.getElementById("wer_cads");
navigator.geolocation.getCurrentPosition(weatherForecast);

function weatherForecast(position) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&xclude=hourly,minutely,alerts&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var FirstWeatherCard = 0
      data.daily.forEach((value, index) => {

        var today = new Date()
        var curHr = today.getHours()
        var typeOfDay = ""

        if (curHr < 12) {
          typeOfDay = value.feels_like.morn
        } else if (curHr < 17) {
          typeOfDay = value.feels_like.day
        } else if (curHr < 21) {
          typeOfDay = value.feels_like.eve
        } else {
          typeOfDay = value.feels_like.night
        }

        if (index >= 0 && index < 5) {
            if (index == 0) {
              var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
              });
              const wcard = document.createElement("div");
              const temp = document.createElement("p");
              temp.innerHTML = `High: ${Math.round(
                value.temp.max
              )}°   Low: ${Math.round(value.temp.min)}°`;
              const weekly = document.createElement("p");
              weekly.innerText = dayname;
              const weather = document.createElement("p")
              temp.classList.add("foreTemp")
              weekly.classList.add("foreDay");
              wcard.classList.add("foreCardBeginning");
              wcard.appendChild(weekly);
              Array.from(value.weather).forEach(function (x) {
                weather.innerText = x.description
                weather.classList.add("feels_like")
                wcard.appendChild(weather)
              })
              wcard.appendChild(temp);
              fore.appendChild(wcard);
            } else {
              var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                weekday: "long",
              });
              const wcard = document.createElement("div");
              const temp = document.createElement("p");
              temp.innerHTML = `High: ${Math.round(
                value.temp.max
              )}°   Low: ${Math.round(value.temp.min)}°`;
              const weekly = document.createElement("p");
              weekly.innerText = dayname;
              const weather = document.createElement("p")
              temp.classList.add("foreTemp")
              weekly.classList.add("foreDay");
              wcard.classList.add("foreCard");
              wcard.appendChild(weekly);
              Array.from(value.weather).forEach(function (x) {
                weather.innerText = x.description
                weather.classList.add("feels_like")
                wcard.appendChild(weather)
              })
              wcard.appendChild(temp);
              fore.appendChild(wcard);
            }
          }
      });
    });
}


try {
  var section_int_1 = document.getElementById("ignore_me_1").innerText
  var section_int_2 = document.getElementById("ignore_me_2").innerText
  var section_int_3 = document.getElementById("ignore_me_3").innerText
  var section_homes = "PASS"
} catch {
  var section_homes = "ERROR"
}

if (section_homes === "PASS") {
  fetch(
    `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${section_int_1}%20OR%20${section_int_2}%20OR%20${section_int_3}&language=en`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      apples = 0;
      Array.from(data.results).forEach(function (a) {
        var randomAdPlace = Math.floor(Math.random() * 10) + 1;
        if (randomAdPlace === 5) {
          randomAdFunction(apples);
          apples++;
        } else {
          apples++;
          const aLink = document.createElement("a");
          aLink.href = `${a.link}`;
          aLink.target = "_blank";
          const article = document.createElement("div");
          const desc = document.createElement("p");
          if (a.description === null) {
            desc.innerText = "(description not found or unavailable!)"
          } else {
            desc.innerText = a.description;
          }
          desc.style.fontSize = "2vh";
          article.classList.add("card");
          const image = document.createElement("img");
          console.log(a.image_url)
          if (a.image_url == null) {
            image.src =
              "https://miro.medium.com/max/1400/1*T9VUDALam3DIS0wHDWrxBg.png";
          } else {
            image.src = a.image_url;
          }
          image.onerror = function() {
            image.src = "https://miro.medium.com/max/1400/1*T9VUDALam3DIS0wHDWrxBg.png"
          };
          image.classList.add("apiImage");
          const title = document.createElement("p");
          title.innerText = a.title;
          title.style.fontSize = "3vh"
          article.appendChild(title);
          article.appendChild(image);
          article.appendChild(desc);
          aLink.classList.add("aLink");
          aLink.appendChild(article);
          const one = document.getElementById("one");
          one.classList.add("column");
          one.appendChild(aLink);
        }
      });
    });
}


function randomAdFunction(i) {
  fetch("/static/ads.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var randoad = Math.floor(Math.random() * 8);
      const a = data[randoad];


      const aLink = document.createElement("a");
      aLink.href = `${a.link}`;
      aLink.target = "_blank";
      const article = document.createElement("div");
      const desc = document.createElement("p");
      desc.innerText = a.creator;
      desc.style.fontSize = "2vh";
      article.classList.add("card");
      const image = document.createElement("img");
      image.src = a.image_url;
      image.classList.add("apiImage");
      const title = document.createElement("p");
      title.innerText = a.title;
      title.style.fontSize = "3vh"
      const adImage = document.createElement("img");
      adImage.src = "../static/ad.png"
      adImage.classList.add("adImageCSS")
      aLink.appendChild(title);
      aLink.appendChild(image);
      aLink.appendChild(desc);
      aLink.appendChild(adImage)
      aLink.classList.add("aLink");
      article.appendChild(aLink);
      const one = document.getElementById("one");
      one.insertBefore(article, one.children[i]);
    });
}

function openNav() {
  document.getElementById("mySidebar").classList.add("open_sidebar_JS-CSS");
  document.getElementById("mySidebar").classList.remove("close_sidebar_JS-CSS");
}

function closeNav() {
  document.getElementById("mySidebar").classList.add("close_sidebar_JS-CSS");
  document.getElementById("mySidebar").classList.remove("open_sidebar_JS-CSS");
}