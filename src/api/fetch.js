const URL = process.env.REACT_APP_API_KEY;

export function getSearch() {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
}

export function getMostPopular() {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${process.env.REACT_APP_API_KEY}&maxResults=50`
  ).then((response) => response.json());
}

