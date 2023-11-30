function Tweeter() {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = 0;
  let commentIdCounter = 0;

  function getPosts() {
    return _posts;
  }

  function addPost(text) {
    if (_posts.length !== 0) {
      postIdCounter = _posts.length + 1;
    } else {
      postIdCounter += 1;
    }

    const newPost = {
      text: text,
      id: `p${postIdCounter}`,
      comments: [],
    };

    _posts.push(newPost);
  }

  function removePost(postID) {
    for (let i = 0; i < _posts.length; i++) {
      if (_posts[i].id === postID) {
        _posts.splice(i, 1);
        break;
      }
    }
  }

  function addComment(text, postID) {
    const newComment = {
      id: `c${commentIdCounter}`,
      text: text,
    };

    for (let i = 0; i < _posts.length; i++) {
      if (_posts[i].id === postID) {
        if (_posts.length !== 0 && _posts[i].comments.length !== 0) {
          commentIdCounter = _posts[i].comments.length + 1;
        } else {
          commentIdCounter += 1;
        }
        _posts[i].comments.push(newComment);
        break;
      }
    }
  }

  function removeComment(postID, commentID) {
    for (i = 0; i < _posts.length; i++) {
      if (_posts[i].id === postID) {
        for (j = 0; j < _posts[i].comments.length; j++) {
          if (_posts[i].comments[j].id === commentID) {
            _posts[i].comments.splice(j, 1);
          }
        }
      }
    }
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
}

