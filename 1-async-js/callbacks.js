const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); // hypothetically dealing with the server
}

function createPost(post, callback) {
  // take in function - callback
  setTimeout(() => {
    posts.push(post); //push into posts array new post
    callback();
  }, 2000); // tooks longer and don't appear
}

// getPosts();  move like callback in createPost(post, callback);

createPost({ title: "Post Tree", body: "This is post three" }, getPosts);
