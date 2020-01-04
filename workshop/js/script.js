const searchForm = document.querySelector("#search-form"),
  movie = document.querySelector("#movies"),
  apiHost = "https://api.themoviedb.org",
  imgHost = "https://image.tmdb.org/t/p/w300",
  apiKey = "03df5e3d94a77bed0b06a5ec7a92cc71";

function apiSearch(e) {
  e.preventDefault();
  //save value -> .value
  const searchText = document.querySelector(".form-control").value,
    server = `${apiHost}/3/search/multi?api_key=${apiKey}&language=ru&query=${searchText}`;
  requestApi("GET", server);
}

searchForm.addEventListener("submit", apiSearch);

function requestApi(method, url) {
  const request = new XMLHttpRequest();
  request.open(method, url);
  request.send();

  request.addEventListener("readystatechange", () => {
    // if ready state not 4 we're exit on the func
    if (request.readyState !== 4) return;
    // http код ответа - бывает 404, 402.., нужно получить 200
    if (request.status !== 200) {
      console.log("error: " + request.status);
      return; // ?
    }

    const output = JSON.parse(request.responseText);

    let inner = "";

    output.results.forEach(item => {
      let nameItem = item.name || item.title,
        img =
          item.poster_path === null
            ? ""
            : `<img src="${imgHost}${
                item.poster_path
              }" class="card-img-top img-fluid img-thumbnail" alt="${nameItem}"`,
        overview = item.overview,
        tempDate = item.release_date || item.first_air_date,
        itemDate =
          tempDate !== "" && tempDate !== undefined
            ? new Date(Date.parse(tempDate)).toLocaleString("ru", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            : "неизвестно";

      inner += `
        <div class='col-12 col-md-4 mb-5'>
          <div class='card'>
              ${img}
              <div class='card-body'>
                <h5 class="card-title text-success text-center">${nameItem}</h5>
                <p class="text-center text-info">Дата выхода: ${itemDate}</p>
                <p class="text-sm-left">${overview}</p>
              </div>
          </div>
        </div>
      `;
    });

    movie.innerHTML = inner;

    // console.log(output);
    // console.log(request.responseText);
    // console.log(request.readyState); // 4
  });
}
