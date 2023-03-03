var posts = [];

function addPost() {
  // Get the values of the title, author, and content fields
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var content = document.getElementById("content").value;

  // Create a new post object
  var post = {
    title: title,
    author: author,
    content: content
  };

  // Add the post object to the posts array
  posts.push(post);

  // Display the posts on the screen
  displayPosts();
}

function displayPosts() {
    // Get the posts container element
    var postsContainer = document.getElementById("posts");
  
    // Clear the posts container
    postsContainer.innerHTML = "";
  
    // Loop through the posts array and create elements for each post
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var postElement = document.createElement("article");
      var postTitle = document.createElement("h2");
      postTitle.textContent = post.title;
      var postAuthor = document.createElement("p");
      postAuthor.textContent = "By " + post.author;
      var postDate = document.createElement("p");
      var date = new Date();
      postDate.textContent = "Posted on " + date.toLocaleDateString();
      var postContent = document.createElement("p");
      postContent.textContent = post.content;
      postElement.appendChild(postTitle);
      postElement.appendChild(postAuthor);
      postElement.appendChild(postDate);
      postElement.appendChild(postContent);
      postsContainer.appendChild(postElement);
    }
  }

