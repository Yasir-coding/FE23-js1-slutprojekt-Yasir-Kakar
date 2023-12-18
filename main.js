const API_KEY = "b28c2f405afdf59587eddb70dbd37781"; 


const url = `https://api.themoviedb.org/3/movie/3?language=en-US&api_key=${API_KEY}`;


fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));