import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../api/api";

function CommentItem({ comment, setCommentHasBeenDeleted }) {
  const { user } = useContext(UserContext);
  const [isError, setIsError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function handleDelete() {
    setIsError(false);
    setIsDeleting(true);
    setCommentHasBeenDeleted(false);
    deleteComment(comment.comment_id)
      .then(() => {
        setIsDeleting(false);
        setCommentHasBeenDeleted(comment.comment_id);
      })
      .catch((error) => {
        setIsError(true);
        setIsDeleting(false);
      });
  }

  return (
    <>
      <p className="comment-author-header">
        <span className="comment-author-text">{comment.author}:</span>
        {comment.author === user && !isDeleting ? (
          <button
            onClick={() => handleDelete()}
            className="comment-delete-button"
          >
            delete
          </button>
        ) : null}
      </p>
      <p className="comment-body">{comment.body}</p>
      {isDeleting ? (
        <p className="comment-votes">deleting...</p>
      ) : isError ? (
        <p className="comment-votes">database error - try again</p>
      ) : (
        <p className="comment-votes">votes: {comment.votes}</p>
      )}
    </>
  );
}

export default CommentItem;
