// starter cod
fetch(
  "https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=apple"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
