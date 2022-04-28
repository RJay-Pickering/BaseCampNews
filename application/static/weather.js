const fore = document.getElementById("weather");
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  console.log(position);
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&xclude=hourly,minutely,alerts&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.daily.forEach((value, index) => {
        if (index >= 0 && index < 6) {
          var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
            weekday: "long",
          });
          console.log(dayname);
          const wcard = document.createElement("div");
          const temp = document.createElement("p");
          temp.innerHTML = `High: ${Math.round(
            value.temp.max
          )}°   Low: ${Math.round(value.temp.min)}°`;
          console.log(temp);
          const weekly = document.createElement("p");
          weekly.innerText = dayname;
          weekly.classList.add("forecastDays");
          wcard.classList.add("forecastCard");
          wcard.appendChild(weekly);
          Array.from(value.weather).forEach(function (x) {
            if (x.main == "Rain") {
              wcard.style.backgroundImage =
                "url('https://s7d2.scene7.com/is/image/TWCNews/0622_n13_light_rain?wid=1250&hei=703&$wide-bg$')";
            } else if (x.main == "Clear") {
              wcard.style.backgroundImage =
                "url('https://cellularnews.com/wp-content/uploads/2020/04/43-clear-skies-at-the-beach-wallpaper-1-325x485.jpg')";
            } else if (x.main == "Haze") {
              wcard.style.backgroundImage =
                "url('https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg')";
            } else if (x.main == "Mist") {
              wcard.style.backgroundImage =
                "url('https://media.arubanetworks.com/blogs/GettyImages-1164051562.jpg')";
            } else if (x.main == "Clouds") {
              wcard.style.backgroundImage =
                "url('https://s7d2.scene7.com/is/image/TWCNews/clouds_jpg_jpg_jpgjpgjpg')";
            } else if (x.main == "Sand" || x.main == "Dust") {
              wcard.style.backgroundImage =
                "url('https://today.tamu.edu/wp-content/uploads/2011/10/GettyImages-695548638-1024x668.jpg')";
            } else if (x.main == "Snow") {
              wcard.style.backgroundImage =
                "url('https://www.gannett-cdn.com/presto/2022/01/14/NPNR/b468954c-ff6c-4699-af2c-95f610bbfc9c-pexels-oleg-magni-1866711.jpg?crop=5471,3078,x0,y278&width=3200&height=1801&format=pjpg&auto=webp')";
            } else if (x.main == "Thunderstorm") {
              wcard.style.backgroundImage =
                "url('https://www.geico.com/living/wp-content/uploads/geico-more-Thunderstorms-post-2016.jpg')";
            } else if (x.main == "Smoke" || x.main == "Fog") {
              wcard.style.backgroundImage =
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZ7lKskZGiCWl4-WI2Ep-l-i8IYiUOT9gxQ&usqp=CAU')";
            } else if (x.main == "Hail") {
              wcard.style.backgroundImage =
                "url('https://www.denverpost.com/wp-content/uploads/2019/05/D7p71S-X4AA6fkM.jpg')";
            } else if (x.main == "Tornado") {
              wcard.style.backgroundImage =
                "url('data:image/jpeg;base64,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')";
            } else {
              wcard.style.backgroundImage =
                "url('data:image/jpeg;base64,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')";
            }

            const weatherDes = document.createElement("p");
            weatherDes.innerText = x.description;
            wcard.appendChild(weatherDes);
          });
          wcard.appendChild(temp);
          // const forecast = document.getElementById("weather");
          // forecast.appendChild(wcard);
          fore.appendChild(wcard);
          // const daysOfWeek = document.querySelector(".forecastDays");
          // daysOfWeek.style.display = "flex";
          // daysOfWeek.style.flexDirection = "row";
        }
      });
    });
}

var sectionNews = 0;
fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=Weather&language=en`
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
      var randoad = Math.floor(Math.random() * 7);
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

function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("mySidebar").style.border = "1px solid black";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
