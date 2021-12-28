const repliesCommentToAttrRemover = (treeComments) => {
  treeComments.forEach((comment) => {
    if(comment.replies !== undefined) {
      repliesCommentToAttrRemover(comment.replies);
    }

    delete comment.commentTo;
  });

  return treeComments;
};

module.exports = repliesCommentToAttrRemover;
