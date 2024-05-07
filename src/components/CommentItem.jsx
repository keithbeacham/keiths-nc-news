function CommentItem({ comment }) {
  return (
    <>
      <p className="comment-author">{comment.author}:</p>
      <p className="comment-body">{comment.body}</p>
      <p className="comment-votes">Votes: {comment.votes}</p>
    </>
  );
}

export default CommentItem;
