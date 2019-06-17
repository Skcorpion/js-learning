const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => {
      output += `<h2>${post.title}</h2><p>${post.body}</p>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const errore = false;

      if (!errore) {
        resolve();
      } else {
        reject("Err: Smth g wrng!");
      }
    }, 2000);
  });
}

async function init() {
  await createPosts({ title: "Post Three", body: "This ios" });

  getPosts();
}

init();

// Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

// Promise.all

const promise1 = 12;
const promise2 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);
const promise3 = Promise.resolve("Hello Me");
const promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "MrFreeman")
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
