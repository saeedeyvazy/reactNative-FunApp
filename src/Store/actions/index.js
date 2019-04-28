import axios from "axios";
const URI = `https://jsonplaceholder.typicode.com`;

export function getArticle() {
  const request = axios
    .get(`${URI}/posts`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => console.log(error.message));

  return {
    type: "GET_ARTICLE",
    payload: request
  };
}
