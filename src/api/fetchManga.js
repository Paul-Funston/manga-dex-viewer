import axios from "axios";

const API_URL = process.env.REACT_APP_FULL_URL;

const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  mode: 'cors',
};

export function fetchManga() {
  const url = "https://api.mangadex.org/manga?limit=30&contentRating%5B%5D=safe&order%5BfollowedCount%5D=desc&includes%5B%5D=cover_art";
  

  return axios.get(url, options).then(response => response.data);
    
}

export function getManga(id) {
  const url = `https://api.mangadex.org/manga/${id}?includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5Dartist`
  return axios.get(url, options).then(response => response.data);
}