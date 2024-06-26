import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://keiths-be-nc-news.onrender.com/api",
});

export function getAllArticles(topic, sort_by, order) {
  const params = { params: { sort_by, order } };
  if (topic) {
    params.params.topic = topic;
  }
  return ncNewsAPI.get("/articles", params);
}

export function getUsername(username) {
  return ncNewsAPI.get(`/users/${username}`);
}

export function getArticle(article_id) {
  return ncNewsAPI.get(`/articles/${article_id}`);
}

export function patchArticle(article_id, inc_votes) {
  return ncNewsAPI.patch(`/articles/${article_id}`, { inc_votes });
}
export function getComments(article_id) {
  return ncNewsAPI.get(`/articles/${article_id}/comments`);
}

export function postComment(article_id, comment) {
  return ncNewsAPI.post(`/articles/${article_id}/comments`, comment);
}

export function deleteComment(comment_id) {
  return ncNewsAPI.delete(`/comments/${comment_id}`);
}

export function getTopics() {
  return ncNewsAPI.get("/topics");
}
