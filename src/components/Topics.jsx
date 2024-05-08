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
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="topic-list-title" key="topic-list-title">
        topics list
      </h1>
      <ul className="topic-list">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <TopicItem topic={topic} className="topic-item" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Topics;
