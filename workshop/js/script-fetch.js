const searchForm = document.querySelector("#search-form"),
  movie = document.querySelector("#movies"),
  apiHost = "https://api.themoviedb.org",
  imgHost = "https://image.tmdb.org/t/p/w300",
  apiKey = "03df5e3d94a77bed0b06a5ec7a92cc71",
  trends = `${apiHost}/3/trending/all/day?api_key=${apiKey}&language=ru`;

// -------------------- Movie search -------------------

const apiSearch = e => {
  e.preventDefault();
  const searchText = document.querySelector(".form-control").value;
  if (searchText.trim().length === 0) {
    movie.innerHTML =
      '<h2 class="col-12 text-center text-danger">Поле поиска не должно быть пустым!</h2>';
    return;
  }
  const server = `${apiHost}/3/search/multi?api_key=${apiKey}&language=ru&query=${searchText}`;
  movie.innerHTML = `
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-nidden="true"></span>
    Загрузка...
  </button>`;

  fetch(server)
    .then(value => {
      if (value.status !== 200) {
        return Promise.reject(new Error(value.status));
      }
      return value.json();
    })
    .then(output => {
      let inner = "";
      if (output.results.length === 0) {
        ('<h2 class="col-12 text-center text-danger" > По вашему запросу ничего не найдено</h2 >');
      }
      output.results.forEach(item => {
        let dataInfo = "";
        if (item.media_type !== "person") {
          dataInfo = `data-id='${item.id}' data-type='${item.media_type}'`;
        }

        let nameItem = item.name || item.title,
          img =
            item.poster_path === null
              ? `<img src="./img/noposter.jpg" class="card-img-top img-fluid img-thumbnail"alt="no poster" ${dataInfo}>`
              : `<img src="${imgHost}${
                  item.poster_path
                }" class="card-img-top img-fluid img-thumbnail" alt="${nameItem}" ${dataInfo}>`,
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
        <div class='col-12 col-md-4 item'>
          <div class='card shadow mb-5'>
            ${img}
            <div class="card-body">
              <h5 class="card-title text-success text-center">${nameItem}</h5>
              <h6 class="text-center text-info font-weight-light">Дата выхода: ${itemDate}</h6>
              <p class="text-sm-left"><small>${cutText(
                overview,
                27,
                "..."
              )}</small></p>
            </div>
          </div>
        </div>
      `;
      });
      movie.innerHTML = inner;

      addEventMedia();
    })
    .catch(reason => {
      movie.innerHTML = "Упс, что-то пошло  не так";
      console.log("error" + reason.status);
    });
};

searchForm.addEventListener("submit", apiSearch);

// ------------------DOMContentLoaded ------------------

document.addEventListener("DOMContentLoaded", () => {
  fetch(trends)
    .then(value => {
      if (value.status !== 200) {
        return Promise.reject(new Error(value.status));
      }
      return value.json();
    })
    .then(output => {
      let inner =
        '<h2 class="col-12 text-center text-info mb-5"> Популярные за неделю</h2>';
      if (output.results.length === 0) {
        inner =
          '<h2 class="col-12 text-center text-danger"> По вашему запросу ничего не найдено</h2>';
      }
      output.results.forEach(item => {
        let mediaType = item.title ? "movie" : "tv";
        let dataInfo = `data-id="${item.id}" data-type="${mediaType}"`;
        let nameItem = item.name || item.title,
          img =
            item.poster_path === null
              ? `<img src="./img/noposter.jpg" class="card-img-top img-fluid img-thumbnail"alt="no poster" ${dataInfo}>`
              : `<img src="${imgHost}${
                  item.poster_path
                }" class="card-img-top img-fluid img-thumbnail" alt="${nameItem}" ${dataInfo}>`,
          overview = item.overview,
          itemDate =
            item.release_date !== "" && item.release_date !== undefined
              ? new Date(Date.parse(item.release_date)).toLocaleString("ru", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              : "неизвестно";

        inner += `
        <div class="col-12 col-md-4 item">
          <div class="card shadow mb-5">
            ${img}
            <div class="card-body">
              <h5 class="card-title text-success text-center">
              ${nameItem}</h5>
              <h6 class="text-center text-info font-weight-light">Дата выхода: ${itemDate}</h6>
              <p class="text-sm-left"><small>${cutText(
                overview,
                40,
                "..."
              )}</small></p>
            </div>
          </div>
        </div>`;
      });
      movie.innerHTML = inner;

      addEventMedia();
    })
    .catch(reason => {
      movie.innerHTML = "Упс, что-то пошло не так ";
      console.error("error " + reason.status);
    });
});

// ------------------ Show full info -------------------

function showFullInfo() {
  let url = "";
  if (this.dataset.type === "movie" || this.dataset.type === "tv") {
    url = `${apiHost}/3/${this.dataset.type}/${
      this.dataset.id
    }?api_key=${apiKey}&language=ru-RU`;
  } else {
    movie.innerHTML =
      '<h2 class="col-12 text-center text-danger">Произошла ошибка. Неизвестный data-type</h2>';
  }

  fetch(url)
    .then(value => {
      if (value.status !== 200) {
        return Promise.reject(new Error(value.status));
      }
      return value.json();
    })
    .then(output => {
      let genres = "",
        nameItem = output.name || output.title,
        img =
          output.poster_path === null
            ? `<img src="./img/noposter.jpg" class="img-fluid img-thumbnail mb-2" alt="no poster">`
            : `<img src="${imgHost}${
                output.poster_path
              }" class="img-fluid img-thumbnail mb-2" alt="${nameItem}">`;

      output.genres.forEach(genre => {
        genres += genre.name + ", ";
      });
      genres = genres.substr(0, genres.length - 2);

      movie.innerHTML = `
        <h2 class="col-12 text-center text-info mb-5">${output.name ||
          output.title}</h2>
        
        <div class="col-4 bg-light p-5">
          ${img}          
          ${
            output.homepage !== 0
              ? `<p class="text-center text-info mb-2"> 
              <a href="${
                output.homepage
              }" target="_blank">Официальная страница</a></p>`
              : ""
          }
          ${
            output.imdb_id
              ? `<p class="text-center text-info mb-2"> 
            <a href="https://www.imdb.com/title/${
              output.imdb_id
            }" target="_blank">Страница на www.imdb.com</a></p>`
              : ""
          }
        </div>

        <div class ="col-8 bg-light p-5">
          <p class="badge badge-danger p-3">Рейтинг: 
          ${output.vote_average}</p>
          <p class="badge badge-info p-3">Статус: 
          ${output.status}</p>
          <p class="badge badge-success p-3">Премьера: 
          ${output.first_air_date || output.release_date}</p>
          ${
            output.last_episode_to_air
              ? `<p class="badge badge-warning p-3">
              ${output.number_of_seasons} сезон. Вышло 
              ${output.last_episode_to_air.episode_number} серий 
              </p>`
              : ""
          }
          <p class="badge badge-info p-3">${genres}</p>
          ${
            output.overview.length != 0
              ? `<div class="mt-5">${output.overview}</div>`
              : `<h4 class="col-12 text-center text-danger mt-5"> Информация о фильме отсутствует </h4>`
          }
        </div>
        <br>       
        <div class="youtube"</div>`;

      getVideo(this.dataset.type, this.dataset.id);
    })
    .catch(reason => {
      movie.innerHTML = "Упс, что-то пошло не так ";
      console.error("error " + reason.status);
    });
}

// ----------------- Функции и функциональные выражения --------------------

const addEventMedia = () => {
  const media = movie.querySelectorAll("img[data-id]");
  media.forEach(elem => {
    //console.log(elem);
    elem.style.cursor = "pointer";
    elem.addEventListener("click", showFullInfo);
  });
};

const cutText = (str, num, str2) => {
  let words = str.split(" ");
  if (words.length > num) {
    return words.slice(0, num).join(" ") + str2;
  } else return str;
};

const getVideo = (type, id) => {
  let youtube = movie.querySelector(".youtube");

  fetch(`${apiHost}/3/${type}/${id}/videos?api_key=${apiKey}&language=ru`)
    .then(value => {
      if (value.status !== 200) {
        return Promise.reject(new Error(value.status));
      }
      return value.json();
    })
    .then(output => {
      let videoFrame =
        '<h4 class="col-12 text-center text-info mt-5 mb-5"> Фрагменты из видео </h4>';

      if (output.results.length === 0) {
        videoFrame =
          '<h4 class="col-12 text-center text-danger mt-5 mb-5"> К сожалению видео отсутствует </h4>';
      }

      output.results.forEach(item => {
        if (item.site == "YouTube") {
          videoFrame +=
            `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${
          item.key
        }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` +
            " ";
        }
      });

      console.log(videoFrame);
      youtube.innerHTML = videoFrame;
    })
    .catch(reason => {
      youtube.innerHTML = "Видео отсутствует!";
      console.log("errore" + reason.status);
    });
};
