navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5`
    // "https://api.openweathermap.org/data/2.5/weather?q=Water+Valley&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var city = document.getElementById("city");
      var temp = document.getElementById("temp");
      // var humidity = document.getElementById("humid");
      // var windSpeed = document.getElementById("windSpeed");
      city.innerText = `City: ${data.name}`;
      temp.innerText = `Current Temperature: ${Math.round(data.main.temp)}°F`;
      // humidity.innerText = `Humidity: \n${data.main.humidity}%`;
      // windSpeed.innerText = `Wind Speed: \n${Math.round(data.wind.speed)}mph`;
    });
}

fetch("/static/udata.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var int1 = data.interest1;
    var int2 = data.interest2;
    var int3 = data.interest3;

    console.log(int1, int2, int3);

    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${int1}%20OR%20${int2}%20OR%20${int3}&language=en`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        apples = 0;
        console.log(data)
        Array.from(data.results).forEach(function (a) {
          var randomAdPlace = Math.floor(Math.random() * 10) + 1;
          console.log(randomAdPlace);
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
            if (a.image_url == null) {
              image.src =
                "https://miro.medium.com/max/1400/1*T9VUDALam3DIS0wHDWrxBg.png";
            } else {
              image.src = a.image_url;
            }
            image.classList.add("apiImage");
            const title = document.createElement("p");
            title.innerText = a.title;
            title.style.fontSize = "3vh"
            aLink.appendChild(title);
            aLink.appendChild(image);
            aLink.appendChild(desc);
            aLink.classList.add("aLink");
            article.appendChild(aLink);
            const one = document.getElementById("one");
            one.classList.add("column");
            one.appendChild(article);
            console.log(article);
          }
        });
      });
  });
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
      aLink.appendChild(title);
      aLink.appendChild(image);
      aLink.appendChild(desc);
      aLink.classList.add("aLink");
      article.appendChild(aLink);
      const one = document.getElementById("one");
      one.classList.add("column");
      // one.appendChild(aLink);
      one.insertBefore(article, one.children[i]);
      console.log(article);
    });
}

function openNav() {
  console.log("checking")
  document.getElementById("mySidebar").classList.add("open_sidebar_JS-CSS");
  document.getElementById("main").classList.add("open_main_JS-CSS");
  document.getElementById("mySidebar").classList.remove("close_sidebar_JS-CSS");
  document.getElementById("main").classList.remove("close_main_JS-CSS");
}

function closeNav() {
  document.getElementById("mySidebar").classList.add("close_sidebar_JS-CSS");
  document.getElementById("main").classList.add("close_main_JS-CSS");
  document.getElementById("mySidebar").classList.remove("open_sidebar_JS-CSS");
  document.getElementById("main").classList.remove("open_main_JS-CSS");
}
