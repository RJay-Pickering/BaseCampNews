// starter code
function load() {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-02-21&sortBy=publishedAt&apiKey=85be65887e2646eab83a0774f8c6a6d1"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
