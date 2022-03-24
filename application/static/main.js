// starter code

var news = document.getElementById("news");

fetch(
  "https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=stocks"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    Array.from(data.results).forEach(function (a) {
      console.log(a);
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
      article.innerHTML = a.title;
      article.appendChild(desc);
      article.appendChild(date);
      aLink.classList.add("aLink");
      aLink.appendChild(article);
      news.appendChild(aLink);
    });
  });
