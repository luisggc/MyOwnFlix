import Head from "next/head";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Nav from "../components/Nav";
import Results from "../components/Results";
import { MovieModalProvider } from "../context/MovieModalContext";
import styles from "../styles/Home.module.css";
import { fetchGenre } from "../api/fetch";

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
        <Results initialResults={results} />
        <Movie />
      </div>
    </MovieModalProvider>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const data = await fetchGenre(genre)
  return {
    props: {
      results: data?.results,
    },
  };
}
