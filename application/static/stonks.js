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

const query = document.getElementById("head").innerText;

fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${query}&country=us,gb,jp&language=en,jp`
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
      // one.appendChild(aLink);
      one.insertBefore(aLink, one.children[i]);
      console.log(article);
    });
}

const stonks = document.getElementById("stocks");
fetch(
  "http://api.marketstack.com/v1/eod?access_key=bd6e6a6ed1c65cc7677fa777cdab6f8b&symbols=AAPL,AMZN,JPM,TSLA,DOW&limit=5"
)
  .then((response) => {
    return response.json();
  })
  .then((d) => {
    console.log(d);
    d.data.forEach(function (s) {
      const stock = document.createElement("div");
      const price = document.createElement("p");
      price.innerHTML = s.adj_close;
      const symbol = document.createElement("p");
      const logo = document.createElement("img");
      logo.id = 'logo';
      symbol.id = 'symbol';
      symbol.innerText = s.symbol;
      console.log(symbol.innerText + 'sIT');
      console.log(s.symbol);
      logo.style.width = "50px";
      symbol.classList.add("forecastDays");
      stock.classList.add("forecastCard");
      stock.appendChild(symbol);
      stock.appendChild(logo);
      stock.appendChild(price);
      console.log(stock);
      stocks.appendChild(stock);
    });
    stockHead = document.getElementsByClassName('stocks');
    Array.from(stockHead).forEach(function(s) {
      console.log(s)
      const name = document.getElementById('symbol')
      if (name.value() = 'AAPL') {
        var logo = document.getElementById('logo').src = '/static/Apple_logo_black.svg'
      }
    })

  });

function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("mySidebar").style.border = "1px solid black";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
