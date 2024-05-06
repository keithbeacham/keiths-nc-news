import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://keiths-be-nc-news.onrender.com/api",
});

export function getAllArticles(topic) {
  let params = {};
  if (topic) {
    params = { params: { topic } };
  } else {
    params = {};
  }
  return ncNewsAPI.get("/articles", params);
}

export function getUsername(username) {
  return ncNewsAPI.get(`/users/${username}`);
}
