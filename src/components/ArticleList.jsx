import { useEffect, useState } from "react";
import { getTopics, getAllArticles } from "../api/api";
import { Link, useParams } from "react-router-dom";
import ArticleHeader from "./ArticleHeader";

function ArticleList() {
  const [isError, setIsError] = useState(false);
  const [urlIsWrong, setUrlIsWrong] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSort_by] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  let { topic } = useParams();

  useEffect(() => {
    if (topic) {
      getTopics()
        .then((response) => {
          const ValidTopics = response.data.topics;
          if (
            !ValidTopics.map((topicObj) => {
              return topicObj.slug;
            }).includes(topic)
          ) {
            setUrlIsWrong(true);
            topic = "";
          }
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
        });
    }
  }, []);

  useEffect(() => {
    setIsError(false);
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
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [topic, sort_by, order]);

  function sortByComments(sortOrder, articlesToSort) {
    const sortedArticles = [...articlesToSort];
    if (sortOrder === "DESC") {
      sortedArticles.sort((a, b) => {
        return b.comment_count - a.comment_count;
      });
    } else {
      sortedArticles.sort((a, b) => {
        return a.comment_count - b.comment_count;
      });
    }
    return sortedArticles;
  }

  return (
    <>
      {urlIsWrong ? (
        <div className="error-invalid-url-page">
          <p>Oops something has gone wrong !</p>
          <p>Please check your URL</p>
        </div>
      ) : (
        <>
          <div className="article-list-header">
            <h1 className="article-list-title">
              Articles on {topic ? topic : "everything"}
            </h1>
            <label htmlFor="sort-by">sort by</label>
            <select
              name="sort-by"
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
              onChange={(e) => {
                setOrder(e.target.value);
              }}
            >
              <option value="DESC">first</option>
              <option value="ASC">last</option>
            </select>
          </div>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Oops - something has gone wrong !</p>
          ) : (
            <ul className="article-list">
              {articles.map((article) => {
                return (
                  <Link
                    to={`/article/${article.article_id}`}
                    style={{ textDecoration: "none", color: "black" }}
                    key={article.article_id}
                    className="article-item"
                  >
                    <li>
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
        </>
      )}
    </>
  );
}

export default ArticleList;
