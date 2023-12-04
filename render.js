function Renderer() {
  function renderPosts(posts) {
    $("#posts").empty();

    for (let post of posts) {
      const postHTML = `<div class="post" id="${post.id}"><span class="post-text">${post.text}</span></div>`;
      $("#posts").append(postHTML);

      for (let comment of post.comments) {
        const commentHTML = `<div class="comment" id="${comment.id}"><span class="comment-text"><button class='delete-comment'>X</button>${comment.text}</span>`;

        $(`#${post.id}`).append(commentHTML);
      }
      const deletePostBtn = `<button class = "delete button-45" class="button-45" role="button"> Delete Post</button>`;
      
      const inputNewTxt = $(
        "<input class='comment-input' placeholder='Write a new comment...'>"
      );
      const publishBtn = $(
        "<button class='publish-comment-btn'>Publish</button>"
      );
      $(`#${post.id}`).append(inputNewTxt, publishBtn);
      $(`#${post.id}`).append(deletePostBtn);
      
    }
  }
  return { renderPosts };
}
