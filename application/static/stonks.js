const query = document.getElementById("head").innerText;

fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${query}&country=us,gb,jp&language=en,jp`
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
      //   image.classList.add("apiImage");
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

const stonks = document.getElementById("stocks");
fetch(
  "http://api.marketstack.com/v1/eod?access_key=f56d05b70cf74f4dd2d61d525cbe567e&symbols=AAPL,AMZN,JPM,TSLA,DOW&limit=4"
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
      symbol.innerText = s.symbol;
      symbol.classList.add("forecastDays");
      stock.classList.add("forecastCard");
      stock.appendChild(symbol);
      stock.appendChild(price);
      stonks.appendChild(stock);
    });
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
