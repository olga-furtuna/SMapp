export const filterComments = (postId, comments) => {
  var postComments = comments.filter(
    // eslint-disable-next-line
    (x) => x.commentable_id == postId && x.commentable_type === "Post"
  );

  var ids = postComments.map((x) => x.id);
  for (var i = 0; i < ids.length; i++) {
    var commentComments = [];
    for (var y = 0; y < comments.length; y++) {
      if (
        // eslint-disable-next-line
        ids[i] == comments[y].commentable_id &&
        comments[y].commentable_type
      ) {
        commentComments.push(comments[y]);
        console.log("success");
      }
    }

    if (commentComments.length > 0) {
      for (var z = 0; z < commentComments.length; z++) {
        postComments.push(commentComments[z]);
      }
    }
  }

  return postComments;
};
