import { useState, useEffect } from "react";
import ArticleHeader from "./ArticleHeader";
import { getArticle } from "../api/api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import ArticleBody from "./ArticleBody";

function Article() {
  const [article, setArticle] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsError(false);
    setisLoading(true);
    getArticle(article_id)
      .then((response) => {
        setArticle(response.data.article);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setisLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Oops - something has gone wrong !</p>
      ) : (
        <span className="article-page">
          <span className="article-item">
            <ArticleHeader article={article} />
            <ArticleBody article={article} />
          </span>
          <CommentsList article_id={article.article_id} />
        </span>
      )}
    </>
  );
}
export default Article;
