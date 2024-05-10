import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";
import { Link, useParams } from "react-router-dom";
import ArticleHeader from "./ArticleHeader";
import { sortByComments } from "../utils/sort-by-comments";

function ArticleList() {
  const [isError, setIsError] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSort_by] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  let { topic } = useParams();

  useEffect(() => {
    setIsError("");
    if (sort_by === "comment_count") {
      setArticles(sortByComments(order, articles));
    } else {
      setIsLoading(true);
      getAllArticles(topic, sort_by, order)
        .then((response) => {
          setArticles(response.data.articles);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.code === "ERR_BAD_REQUEST") {
            setIsError(
              "we don't have that topic, try '/articles' for all articles"
            );
          } else {
            setIsError("please try again");
          }
          setIsLoading(false);
        });
    }
  }, [topic, sort_by, order]);

  return (
    <>
      <div className="article-list-header">
        <h1 className="article-list-title">
          articles on {topic ? topic : "everything"}
        </h1>
        <label htmlFor="sort-by" id="article-sort-selection">
          sort by
        </label>
        <select
          name="sort-by"
          id="article-sort-select"
          onChange={(e) => {
            setSort_by(e.target.value);
          }}
        >
          <option value="created_at" default>
            latest
          </option>
          <option value="comment_count">most comments</option>
          <option value="votes">most popular</option>
        </select>
        <select
          name="order"
          id="article-order-select"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="DESC">first</option>
          <option value="ASC">last</option>
        </select>
      </div>
      <div className="article-list-page">
        {isLoading ? (
          <h2>loading...</h2>
        ) : isError ? (
          <div className="error-invalid-url-page">
            <p>Oops - something has gone wrong !</p>
            <p>{isError}</p>
          </div>
        ) : (
          <ul className="article-list-page">
            {articles.map((article) => {
              return (
                <Link
                  to={`/article/${article.article_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  key={article.article_id}
                >
                  <li className="article-item">
                    <ArticleHeader article={article} />
                    <div className="article-footer">
                      <span className="article-text">
                        {article.comment_count} comments
                      </span>
                      <span className="article-text">
                        {article.votes} votes
                      </span>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default ArticleList;
