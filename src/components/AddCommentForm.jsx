function AddCommentForm({ commentBody, setCommentBody, setIsError }) {
  function handleChange(event) {
    setCommentBody(event.target.value);
    setIsError(false);
  }

  return (
    <form className="add-comment-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="add-comment-body" className="add-comment-label">
        Comment:
      </label>
      <textarea
        id="add-comment-body"
        value={commentBody}
        onChange={(e) => handleChange(e)}
        placeholder="type your comment here"
        className="add-comment-input"
        required
      />
    </form>
  );
}

export default AddCommentForm;
