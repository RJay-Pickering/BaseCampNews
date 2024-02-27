var news = document.getElementById("news");
navigator.geolocation.getCurrentPosition(coordsWeather);

function coordsWeather(position) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var city = document.getElementById("city");
      var temp = document.getElementById("temp");
      city.innerText = `City: ${data.name}`;
      temp.innerText = `Current Temperature: ${Math.round(data.main.temp)}°F`;
    });
}

fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=covid&language=en`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    apples = 0;
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
        desc.innerText = a.description;
        desc.style.fontSize = "10px";
        const date = document.createElement("p");
        date.innerText = `Published: ${a.pubDate}`;
        article.classList.add("card");
        const image = document.createElement("img");
        if (a.image_url == null) {
          image.src =
            "https://miro.medium.com/max/1400/1*T9VUDALam3DIS0wHDWrxBg.png";
          image.style.width = "250px";
          image.style.height = "200px";
        } else {
          image.src = a.image_url;
          image.style.width = "250px";
          image.style.height = "200px";
        }
        image.classList.add("apiImage");
        const title = document.createElement("p");
        title.innerText = a.title;
        article.appendChild(title);
        article.appendChild(image);
        article.appendChild(desc);
        article.appendChild(date);
        aLink.classList.add("aLink");
        aLink.appendChild(article);
        const one = document.getElementById("one");
        one.classList.add("column");
        one.appendChild(aLink);
        console.log(article);
      }
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
      desc.style.fontSize = "10px";
      article.classList.add("card");
      const image = document.createElement("img");
      image.src = a.image_url;
      image.classList.add("apiImage");
      const title = document.createElement("p");
      title.innerText = a.title;
      article.appendChild(title);
      article.appendChild(image);
      article.appendChild(desc);
      aLink.classList.add("aLink");
      aLink.appendChild(article);
      const one = document.getElementById("one");
      one.classList.add("column");
      one.insertBefore(aLink, one.children[i]);
      console.log(article);
    });
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

navigator.geolocation.getCurrentPosition(showPosition);

const covidDropdown = document.getElementById("myDropdown");
var counter = 0;
var userState = "";

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
  )
    .then((res) => res.json())
    .then((data) => {
      userState = data.principalSubdivision;
      fetch(
        `https://disease.sh/v3/covid-19/nyt/states/${userState}?lastdays=30`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(
            `For More Info Dev: https://disease.sh/docs/#/COVID-19%3A%20NYT/get_v3_covid_19_nyt_states__state_`
          );
          var newData = data.reverse();
          Array.from(newData).forEach(function (res) {
            if (counter === 0) {
              counter++;
              var StatesHead = document.createElement("h1");
              StatesHead.classList.add("statesHead");
              StatesHead.innerText = res.state;
              covidDropdown.appendChild(StatesHead);
            }
            const casesBox = document.createElement("div");
            casesBox.classList.add("casesBox");
            var Cases = document.createElement("p");
            Cases.innerText = `Total Cases: ${res.cases}`;
            casesBox.appendChild(Cases);
            var Deaths = document.createElement("p");
            Deaths.innerText = `Total Deaths: ${res.deaths}`;
            casesBox.appendChild(Deaths);
            var dates = document.createElement("p");
            dates.innerText = `Date: ${res.date}`;
            casesBox.appendChild(dates);
            covidDropdown.appendChild(casesBox);
          });
        });
    });
}

function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("mySidebar").style.border = "1px solid black";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
