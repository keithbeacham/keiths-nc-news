import { useEffect, useState } from "react";
import { postComment } from "../api/api";
import AddCommentForm from "./AddCommentForm";

function AddComment(article_id) {
  const [comment, setComment] = useState({});
  const [hasAddedComment, setHasAddedComment] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [isPatching, setIsPatching] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleComment(requestToAddComment) {
    if (!hasAddedComment && requestToAddComment) {
      setAddComment(true);
    } else if (hasAddedComment && !requestToAddComment) {
      console.log("delete the comment");
    }

    // if (addComment !== hasAddedComment) {
    //   setHasAddedComment(addComment);
    //   setIsPatching(true);
    //   setIsError(false);
    //   postComment(article_id, comment)
    //     .then(() => {
    //       setIsPatching(false);
    //     })
    //     .catch((error) => {
    //       setIsError(true);
    //     });
    // }
  }
  return (
    <>
      <div className="add-comment-form">
        {addComment ? <AddCommentForm setComment={setComment} /> : null}
      </div>
      <div className="add-comment-select">
        <button
          className="add-comment-button"
          onClick={() => {
            handleComment(false);
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
            handleComment(true);
          }}
        >
          add comment
        </button>
      </div>
    </>
  );
}
export default AddComment;
