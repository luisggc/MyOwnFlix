import Head from "next/head";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Nav from "../components/Nav";
import Results from "../components/Results";
import { MovieModalProvider } from "../context/MovieModalContext";
import requests from "../requests";
import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  return (
    <MovieModalProvider>
      <div className={styles.container}>
        <Head>
          <title>MyOwnFlix</title>
          <meta name="description" content="Where all you data is" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Nav />
        <Results results={results} />
        <Movie />
      </div>
    </MovieModalProvider>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}&page=1`
  );
  let data = await request.json();

  data = {
    ...data,
    results: data?.results?.map((movie) => {
      return {
        ...movie,
        imageThumbSource: `https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.posterPath
        }`,
        title: movie?.title || movie?.original_name || "",
        imageOriginalSource: `https://image.tmdb.org/t/p/original${
          movie.backdrop_path || movie.posterPath
        }`,
      };
    }),
  };
  
  console.log(data);

  return {
    props: {
      results: data?.results,
    },
  };
}
