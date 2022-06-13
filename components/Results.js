import Thumbnail from "./Thumbnail";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { fetchGenre } from "../api/fetch";
import Spinner from "../components/Spinner";

export default function Results({ initialResults }) {
  const [results, setResults] = useState(initialResults);
  const [isLoading, setIsLoading] = useState(true);
  const page = useRef(1);
  const router = useRouter();

  // useEffect to trigger on scroll end
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY > document.body.offsetHeight - 300) {
        loadMoreResults()
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setResults(initialResults);
  }, [initialResults]);

  const loadMoreResults = async () => {
    const genre = router.query.genre;
    page.current++;
    setIsLoading(true);
    const moreResults = await fetchGenre(genre, page.current, false);
    // This is a bug fix from that api that is return the same movie in different paginations
    const existingIDs = results.map((movie) => movie.id);
    const moreResultsWithoutDuplicates = moreResults.results.filter(
      (m) => existingIDs.indexOf(m?.id) === -1
    );
    setResults((results) => [...results, ...moreResultsWithoutDuplicates]);
    setIsLoading(false);
  };

  return (
    <>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center">
        {results.map((result) => (
          <Thumbnail key={result.id} {...result} />
        ))}
      </div>
      {isLoading && <Spinner />}
    </>
  );
}


