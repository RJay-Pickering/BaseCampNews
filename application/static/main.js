// starter code

var news = document.getElementById("news");

// first column
fetch(
  "https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=Naruto"
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
      image.classList.add("apiImage");
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

// second column
// fetch(
//   "https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=movies"
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.results);
//     Array.from(data.results).forEach(function (a) {
//       console.log(a);
//       const aLink = document.createElement("a");
//       aLink.href = `${a.link}`;
//       aLink.target = "_blank";
//       const article = document.createElement("div");
//       const desc = document.createElement("p");
//       desc.innerText = a.description;
//       desc.style.fontSize = "14px";
//       const date = document.createElement("p");
//       date.innerText = `Published: ${a.pubDate}`;
//       article.classList.add("card");
//       article.innerHTML = a.title;
//       article.appendChild(desc);
//       article.appendChild(date);
//       aLink.classList.add("aLink");
//       aLink.appendChild(article);
//       const two = document.getElementById("two");
//       two.classList.add("column");
//       two.appendChild(aLink);
//     });
//   });

// // third column
// fetch(
//   "https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=india"
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.results);
//     Array.from(data.results).forEach(function (a) {
//       console.log(a);
//       const aLink = document.createElement("a");
//       aLink.href = `${a.link}`;
//       aLink.target = "_blank";
//       const article = document.createElement("div");
//       const desc = document.createElement("p");
//       desc.innerText = a.description;
//       desc.style.fontSize = "14px";
//       const date = document.createElement("p");
//       date.innerText = `Published: ${a.pubDate}`;
//       article.classList.add("card");
//       article.innerHTML = a.title;
//       article.appendChild(desc);
//       article.appendChild(date);
//       aLink.classList.add("aLink");
//       aLink.appendChild(article);
//       const three = document.getElementById("three");
//       three.classList.add("column");
//       three.appendChild(aLink);
//     });
//   });
