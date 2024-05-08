import { useState } from "react";
import { postComment } from "../api/api";
import AddCommentForm from "./AddCommentForm";

function AddComment({
  article_id,
  username,
  commentIsAdded,
  setCommentIsAdded,
}) {
  const [commentBody, setCommentBody] = useState("");
  const [isPatching, setIsPatching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [addComment, setAddComment] = useState(false);

  function submitComment(action) {
    if (!action) {
      setCommentBody("");
      setAddComment(false);
    } else {
      setIsPatching(true);
      setIsError(false);
      postComment(article_id, { username: username, body: commentBody })
        .then(() => {
          setIsPatching(false);
          setAddComment(false);
          setCommentIsAdded(true);
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
          {!commentIsAdded ? (
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
