fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=covid`
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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// var today = new Date();
// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// console.log(date);
const covidDropdown = document.getElementById("myDropdown");
var counter = 0;
fetch(`https://disease.sh/v3/covid-19/nyt/states/Mississippi?lastdays=30`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(
      `For More Info Dev: https://disease.sh/docs/#/COVID-19%3A%20NYT/get_v3_covid_19_nyt_states__state_`
    );
    var newData = data.reverse();
    Array.from(newData).forEach(function (res) {
      if (counter === 0) {
        counter++;
        var StatesHead = document.createElement("h1");
        StatesHead.innerText = res.state;
        covidDropdown.appendChild(StatesHead);
      }
      var Cases = document.createElement("p");
      Cases.innerText = `Total Cases: ${res.cases}`;
      covidDropdown.appendChild(Cases);
      var Deaths = document.createElement("p");
      Deaths.innerText = `Total Deaths: ${res.deaths}`;
      covidDropdown.appendChild(Deaths);
      var dates = document.createElement("p");
      dates.innerText = `Date: ${res.date}`;
      covidDropdown.appendChild(dates);
    });
  });
