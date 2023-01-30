const mv_data = async () => {
  const movieName = document.getElementById("mvname").value;
  const movieYear = document.getElementById("year").value;
  const apiKey = "a57028fb";
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
  );

  const data = await resp.json();
    console.log(data);
    console.log(data["Search"]);

  const movieList = data["Search"];
  //   console.log(movieList)
  const filter = movieList.filter((ad) => {
    if (ad["Year"] === movieYear) {
      return ad;
    }
  });
  console.log(filter);

  // if (filter != "") {
  //   const show = filter;
  //   filter.map(addmovies);
  // } else {
  //   const show = data.Search;
  //   filter.map(addmovies);
  // }
};

document.getElementById("btn").addEventListener("click", mv_data);

// addmovies = (data) => {
//   var show_movies = document.getElementById("res");
//   const m_detail = `<div class="frame">
//     <img src="${data.Poster}" alt="image" class="image" />
//     <h1>${data.Title}</h1>
//     <h3>${data.Year}</h3>
//     </div>`;
// };
// show_movies.insertAdjacentHTML("afterbegin", m_detail);
