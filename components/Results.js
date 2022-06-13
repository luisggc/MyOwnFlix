import Thumbnail from "./Thumbnail";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { fetchGenre } from "../api/fetch";

export default function Results({ initialResults }) {
  const [results, setResults] = useState(initialResults)
  const page = useRef(1)
  const router = useRouter();

  useEffect(() => {
    setResults(initialResults)
  }, [initialResults])

  const genre = router.query.genre


  const loadMoreResults = async () => {
    page.current++
    console.log(page.current)
    console.log(genre)
    const moreResults = await fetchGenre(genre, page.current, false)
    setResults((results => [...results, ...moreResults?.results]))
  }
  
  return (
    <>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result) => (
          <Thumbnail key={result.id} {...result} />
        ))}
      </div>
      <button className="p-5 text-xl bg-white text-black self-center items-center" onClick={loadMoreResults}>Show More</button>
    </>
  );
}
