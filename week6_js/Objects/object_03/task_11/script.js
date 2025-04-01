/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

const posts = [
  { title: "Post 1", content: "This is the first post content.", likes: 0 },
  { title: "Post 2", content: "Here is the second post content.", likes: 0 },
  { title: "Post 3", content: "This is the third post content.", likes: 0 },
];
function displayPosts() {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="likePost(${index})">Like</button>
            <span>${post.likes} Likes</span>
        `;
    postsContainer.appendChild(postDiv);
  });
}
function likePost(postIndex) {
  posts[postIndex].likes++;
  displayPosts();
}
displayPosts();
