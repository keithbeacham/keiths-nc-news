import { useContext, useState } from "react";
import { postComment } from "../api/api";
import AddCommentForm from "./AddCommentForm";
import { UserContext } from "../contexts/User";

function AddComment({
  article_id,
  commentHasBeenAdded,
  setCommentHasBeenAdded,
}) {
  const { user } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const [isPatching, setIsPatching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [addComment, setAddComment] = useState(false);
  let userIsLoggedIn = user ? true : false;

  function submitComment(action) {
    if (!action) {
      setCommentBody("");
      setAddComment(false);
    } else {
      setIsPatching(true);
      setIsError(false);
      postComment(article_id, { username: user, body: commentBody })
        .then((response) => {
          setIsPatching(false);
          setAddComment(false);
          setCommentHasBeenAdded(response.data.comment.comment_id);
        })
        .catch((error) => {
          setIsError(true);
          setIsPatching(false);
        });
    }
  }
  return (
    <>
      {addComment ? (
        <>
          <AddCommentForm
            commentBody={commentBody}
            setCommentBody={setCommentBody}
            setIsError={setIsError}
          />

          <div className="add-comment-select">
            <button
              className="add-comment-button"
              onClick={() => {
                submitComment(false);
              }}
            >
              cancel comment
            </button>
            {isPatching ? (
              <span>updating...</span>
            ) : isError ? (
              <span>try again</span>
            ) : (
              <span></span>
            )}
            <button
              className="add-comment-button"
              onClick={() => {
                submitComment(true);
              }}
            >
              submit comment
            </button>
          </div>
        </>
      ) : (
        <div className="add-comment-select">
          {!userIsLoggedIn ? (
            <p>you must be logged in to add or delete a comment</p>
          ) : !commentHasBeenAdded ? (
            <button
              className="add-comment-button"
              onClick={() => setAddComment(true)}
            >
              add comment
            </button>
          ) : (
            <p>your comment has been added</p>
          )}
        </div>
      )}
    </>
  );
}
export default AddComment;
