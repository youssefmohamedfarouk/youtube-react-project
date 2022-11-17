const URL = process.env.REACT_APP_API_KEY;

export function getYoutubeHomeSearch() {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
}
