const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());
const input = $("input")

// Add Post
function post() {
  const newPostText = input.val();
  tweeter.addPost(newPostText);
  renderer.renderPosts(tweeter.getPosts());
}

// Delete Post
$("#posts").on("click", ".delete", function () {
  const postID = $(this).closest(".post").attr("id");
  tweeter.removePost(postID);
  renderer.renderPosts(tweeter.getPosts());
});

// Add Comment
$("#posts").on("click", ".add-comment", function () {
  const postID = $(this).closest(".post").attr("id");
  const inputNewTxt = $(
    "<input class='comment-input' placeholder='Write a new comment...'>"
  );
  const publishBtn = $("<button class='publish-comment-btn'>Publish</button>");
  $(`#${postID}`).append(inputNewTxt, publishBtn);
  inputNewTxt.on("blur", function () {
    const newCommentText = $(this).val();
    tweeter.addComment(newCommentText, postID);
    renderer.renderPosts(tweeter.getPosts());
  });
});


// Remove Comment 
$("#posts").on("click", ".delete-comment", function () {
  const postID = $(this).closest(".post").attr("id");
  const commentID = $(this).closest(".comment").attr("id");
  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
});
