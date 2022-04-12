const query = document.getElementById("head").innerText;
var sectionNews = 0;

const trend_theme_button = document.querySelector(".lightmode_button");
trend_theme_button.addEventListener("click", () => {
  const trend_background = document.querySelector(".trend_background");
  const trend_nav_bar = document.querySelector(".trend_nav_bar");
  const trend_ForYouNav = document.querySelector(".trend_ForYouNav");
  const trend_ForYouNav_link = document.querySelector(".trend_ForYouNav a");
  const trend_login = document.querySelector(".trend_login");
  const trend_register = document.querySelector(".trend_register");
  const trend_title = document.querySelector(".trend_title");
  trend_background.style.backgroundColor = "white";
  trend_ForYouNav.style.backgroundColor = "white";
  trend_ForYouNav.style.color = "black";
  trend_theme_button.style.border = "1px solid black";
  trend_theme_button.style.borderRadius = "0.90em";
  trend_login.style.color = "black";
  trend_register.style.color = "black";
  trend_theme_button.innerHTML = "Dark Mode";
  trend_ForYouNav_link.style.color = "black";
  console.log(trend_title.classList.toggle("light_trend_title"));
  trend_title.classList.toggle("light_trend_title");
  trend_title.classList.remove("trend_title");
  trend_nav_bar.classList.toggle("light_nav_bar");
  trend_nav_bar.classList.remove("trend_nav_bar");
  trend_ForYouNav.classList.toggle("light_ForYouNav");
  trend_ForYouNav.classList.remove("trend_ForYouNav");
  console.log("hello");
  const title_box = document.querySelector(".column");
  const title = document.createElement("p");
  title.innerHTML = "Trending";
  title_box.appendChild(title);
  title.classList.add("light_trend_title");
});

fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${query}`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    Array.from(data.results).forEach(function (a) {
      if (sectionNews < 3) {
        sectionNews++;
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
        const sectionA = document.createElement("section");
        sectionA.classList.add("flexbox");
        sectionA.appendChild(aLink);
        const one = document.getElementById("one");
        one.classList.add("column");
        one.appendChild(sectionA);
        console.log(article);
      } else if (sectionNews < 6) {
        sectionNews++;
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
        const sectionB = document.createElement("section");
        sectionB.classList.add("flexbox");
        sectionB.appendChild(aLink);
        const one = document.getElementById("one");
        one.classList.add("column");
        one.appendChild(sectionB);
        console.log(article);
      } else if (sectionNews < 9) {
        sectionNews++;
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
        const sectionC = document.createElement("section");
        sectionC.classList.add("flexbox");
        sectionC.appendChild(aLink);
        const one = document.getElementById("one");
        one.classList.add("column");
        one.appendChild(sectionC);
        console.log(article);
      } else {
        sectionNews++;
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
        const sectionD = document.createElement("section");
        sectionD.classList.add("flexbox");
        sectionD.appendChild(aLink);
        const one = document.getElementById("one");
        one.classList.add("column");
        one.appendChild(sectionD);
        console.log(article);
      }
    });
  });
