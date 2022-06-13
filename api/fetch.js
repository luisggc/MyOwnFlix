import requests from "./requests";

const resultsAdaptation = (results) => {
  return results?.map((movie) => {
    return {
      ...movie,
      imageThumbSource: `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.posterPath}`,
      title: movie?.title || movie?.original_name || "",
      imageOriginalSource: `https://image.tmdb.org/t/p/original${
        movie.backdrop_path || movie.posterPath
      }`,
    };
  });
};

export async function fetchGenre(genre, page = 1, forServer = true) {
  const genreServer = requests[genre]?.url || requests.fetchTrending.url;
  const url = forServer
    ? `https://api.themoviedb.org/3${genreServer}&page=${page}`
    : `/api/getGenre?genre=${genre}&page=${page}`;
  const request = await fetch(url);
  let data = await request.json();
  return {
    ...data,
    results: resultsAdaptation(data?.results),
  };
}
