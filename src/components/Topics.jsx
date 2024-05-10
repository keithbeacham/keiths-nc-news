import { useEffect, useState } from "react";
import { getTopics } from "../api/api";
import TopicItem from "./TopicItem";

function Topics() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.data.topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="topic-list-container">
      <h1 className="topic-list-title">topics list</h1>
      {isLoading ? (
        <div className="error-invalid-url-page">
          <h2>loading...</h2>
        </div>
      ) : isError ? (
        <div className="error-invalid-url-page">
          <p>Oops - something has gone wrong !</p>
          <p>please try again</p>
        </div>
      ) : (
        <ul className="topic-list">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <TopicItem topic={topic} className="topic-item" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Topics;
