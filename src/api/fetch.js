// const URL = process.env.REACT_APP_API_KEY;

export function getSearch(searchTerm) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
}

export function getMostPopular() {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${process.env.REACT_APP_API_KEY}&maxResults=200&pageToken=`
  ).then((response) => response.json());
}

export function getOneVideo(videoId) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`

  ).then((response) => response.json());
}
