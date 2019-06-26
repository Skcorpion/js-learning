const searchForm = document.querySelector("#search-form");
const movie = document.querySelector("#movies");
function apiSearch(e) {
  e.preventDefault();
  //save value -> .value
  const searchText = document.querySelector(".form-control").value,
    server =
      "https://api.themoviedb.org/3/search/multi?api_key=03df5e3d94a77bed0b06a5ec7a92cc71&language=ru&query=" +
      searchText;
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
      return;
    }

    const output = JSON.parse(request.responseText);

    let inner = "";

    output.results.forEach(item => {
      let nameItem = item.name || item.title;
      let releaseDate = item.release_date || item.first_air_date;
      inner += `<div class='col-12'>
        <h5>${nameItem}</h5>
        <p>Дата показа: ${releaseDate}</p>
      </div>`;
    });

    movie.innerHTML = inner;

    // console.log(output);
    // console.log(request.responseText);
    // console.log(request.readyState); // 4
  });
}
