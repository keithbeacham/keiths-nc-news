import { useState } from "react";

function AddCommentForm({ comment, setComment }) {
  console.log("adding comment form");

  const [commentBody, setCommentBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form className="add-comment-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="add-comment-body" className="add-comment-label">
          Comment:
        </label>
        <input
          id="add-comment-body"
          type="text"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="type your comment here"
          className="add-comment-input"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
export default AddCommentForm;
