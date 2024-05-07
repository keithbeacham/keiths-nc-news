import { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { getArticle } from "../api/api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

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
        <p className="article-page">
          <ArticleItem article={article} />
          <CommentsList article_id={article.article_id} />
        </p>
      )}
    </>
  );
}
export default Article;
