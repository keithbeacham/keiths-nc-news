import { useState } from "react";
import { patchArticle } from "../api/api";

function ArticleBody({ article }) {
  const [vote, setVote] = useState(0);
  const [isPatching, setIsPatching] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleVote(newVote) {
    if (newVote !== vote) {
      setVote(newVote);
      setIsPatching(true);
      setIsError(false);
      const inc_vote = newVote === 0 ? -1 : 1;
      patchArticle(article.article_id, inc_vote)
        .then(() => {
          setIsPatching(false);
        })
        .catch((error) => {
          setIsError(true);
        });
    }
  }
  return (
    <>
      <p className="article-body">{article.body}</p>
      <div className="article-votes">
        <button
          className="article-votes-button"
          onClick={() => {
            handleVote(0);
          }}
        >
          cancel vote
        </button>
        {isPatching ? (
          <span>updating...</span>
        ) : isError ? (
          <span>try again</span>
        ) : (
          <span>{vote + article.votes} votes</span>
        )}
        <button
          className="article-votes-button"
          onClick={() => {
            handleVote(1);
          }}
        >
          add vote
        </button>
      </div>
    </>
  );
}
export default ArticleBody;
