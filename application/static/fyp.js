fetch("/static/udata.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var int1 = data.interest1;
    var int2 = data.interest2;
    var int3 = data.interest3;

    console.log(int1, int2, int3);

    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${int1}%20OR%20${int2}%20OR%20${int3}&language=en`
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
        });
      });
  });
