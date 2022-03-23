// starter code

var news = document.getElementById("news");

fetch(
  "https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=apple"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    Array.from(data.results).forEach(function (a) {
      console.log(a);
      const aLink = document.createElement("a");
      aLink.href = `${a.link}`;
      aLink.target = "_blank";
      const article = document.createElement("div");
      article.classList.add("card");
      article.innerHTML = a.title;
      aLink.classList.add("aLink");
      aLink.appendChild(article);
      news.appendChild(aLink);
    });
  });
