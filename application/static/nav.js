const query = document.getElementById("head").innerText;

fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${query}`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    Array.from(data.results).forEach(function (a) {
      const aLink = document.createElement("a");
      aLink.href = `${a.link}`;
      aLink.target = "_blank";
      const article = document.createElement("div");
      const desc = document.createElement("p");
      desc.innerText = a.description;
      desc.style.fontSize = "14px";
      const date = document.createElement("p");
      date.innerText = `Published: ${a.pubDate}`;
      article.classList.add("card");
      const image = document.createElement("img");
      if (a.image_url == null) {
        image.src =
          "https://miro.medium.com/max/1400/1*T9VUDALam3DIS0wHDWrxBg.png";
      } else {
        image.src = a.image_url;
      }
      //   image.classList.add("apiImage");
      image.style.width = "350px";
      image.style.height = "auto";
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
    });
  });

// const fore = document.getElementById("weather").innerText;
navigator.geolocation.getCurrentPosition(showPosition);
function showPosition(position) {
  console.log(position);
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=7478d475030acf9b38bb829cba45b7b5`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.daily.forEach((value, index) => {
        if (index > 0) {
          var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
            weekday: "long",
          });
          console.log(dayname);
        }
      });
    });
}
