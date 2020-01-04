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

createPosts({ title: "Post Three", body: "This is SPARTA!!!" })
  .then(getPosts)
  .catch(err => console.log(err));
