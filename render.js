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
      const deletePostBtn = `<button class = "delete" > Delete Post</button>`;
      const commentBtn = `<button class = "add-comment"> Comment</button>`;
      $(`#${post.id}`).append(deletePostBtn);
      $(`#${post.id}`).append(commentBtn)
    }
  }
  return { renderPosts };
}
