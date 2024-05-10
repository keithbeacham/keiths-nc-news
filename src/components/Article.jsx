import { useState, useEffect, useContext } from "react";
import ArticleHeader from "./ArticleHeader";
import { getArticle } from "../api/api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import ArticleBody from "./ArticleBody";
import { SourceContext } from "../contexts/Source";

function Article() {
  const [article, setArticle] = useState({});
  const [isError, setIsError] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const { article_id } = useParams();
  const { setSource } = useContext(SourceContext);

  useEffect(() => {
    setSource(`/article/${article_id}`);
    setIsError("");
    setisLoading(true);
    getArticle(article_id)
      .then((response) => {
        setArticle(response.data.article);
        setisLoading(false);
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          setIsError("we no longer have that article");
        } else {
          setIsError("please try again");
        }
        setisLoading(false);
      });
  }, []);

  return (
    <span className="article-list-page">
      {isLoading ? (
        <div className="error-invalid-url-page">
          <h2>loading...</h2>
        </div>
      ) : isError ? (
        <div className="error-invalid-url-page">
          <p>Oops - something has gone wrong !</p>
          <p>{isError}</p>
        </div>
      ) : (
        <>
          <span className="article-page">
            <span className="article-item">
              <ArticleHeader article={article} />
              <ArticleBody article={article} />
            </span>
            <CommentsList article_id={article.article_id} />
          </span>
        </>
      )}
    </span>
  );
}
export default Article;
