// starter cod

fetch(
  "https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=apple"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    Array.from(data.results).forEach(function (a) {
      console.log(a.title);
      const aLink = document.createElement("a");
      const article = document.createElement("div");
      article.classList.add("card");
      article.innerHTML = a.title;
      aLink.appendChild(article);
      document.body.appendChild(aLink);
    });
  });
