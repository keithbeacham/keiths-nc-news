import { useState, useEffect } from "react";
import { getComments } from "../api/api";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";

function CommentsList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateComments, setUpdateComments] = useState(false);
  const [commentIsAdded, setCommentIsAdded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getComments(article_id)
      .then((response) => {
        setComments(response.data.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [commentIsAdded]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Oops - something has gone wrong !</p>
      ) : (
        <div className="comments-page">
          <h2>Comments</h2>
          <ul className="comments-list">
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id} className="comment-item">
                  <CommentItem comment={comment} />
                </li>
              );
            })}
          </ul>
          <div className="add-comment-page">
            <AddComment
              article_id={article_id}
              commentIsAdded={commentIsAdded}
              setCommentIsAdded={setCommentIsAdded}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default CommentsList;
