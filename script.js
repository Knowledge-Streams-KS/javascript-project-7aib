const mv_data = async () => {
  const movieName = document.getElementById("mvname").value;
  const movieYear = document.getElementById("year").value;
  const apiKey = "a57028fb";
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
  );

  const data = await resp.json();
  //   console.log(data);
  //   console.log(data["Search"]);

  const movieList = data["Search"];
  //   console.log(movieList)
  const filter = movieList.filter((ad) => {
    if (ad["Year"] === movieYear) {
      return ad;
    }
  });
  console.log(filter);
};

document.getElementById("btn").addEventListener("click", mv_data);

