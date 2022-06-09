import { useState, useRef, useContext } from "react";
import { MovieModalContext } from "../context/MovieModalContext";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/outline";

export default function Movie() {
  const { movie, setMovie } = useContext(MovieModalContext);
  //const [ movie, setMovie ] = useState({ backdrop_path: "/i5dUmY2xRzgkmjHJYKNj8kPX1Xx.jpg" });
  //const router = useRouter();
  //const movieID = router.query?.movie;
  //console.log(movie);
  const content = useRef();

  if (!movie) return <></>;
  //const { id } = movie;

  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const imageSource = `${BASE_URL}${movie.backdrop_path || movie.posterPath}`;
  console.log(imageSource);
  const closeModal = () => {
    setMovie(false);
  };

  const { title, overview } = movie;

  return (
    <div
      className="fixed flex z-30 justify-center items-center h-screen w-screen top-0 left-0"
      onClick={(e) => {
        e.preventDefault();
        if (e.target && e.target.contains(content.current)) {
          closeModal();
        }
      }}
    >
      <div className="fixed top-0 left-0 bg-black bg-opacity-75 transition-opacity h-screen w-screen z-40 flex justify-center items-center">
        <div ref={content} className="absolute rounded z-50 bg-black  overflow-hidden mx-10 max-w-7xl">
          <div className="relative">
            <div>
              <Image layout="responsive" height={1080} width={1920} src={imageSource} />
            </div>
            <div className="absolute bottom-0 bg-gradient-to-t from-black h-52 w-full"></div>
            <div className="absolute bottom-0 ml-16 mb-10">
              <div className="max-w-xl">
                <h2 className="text-7xl">{title}</h2>
              </div>
              <button className="bg-white font-bold rounded-md px-8 my-4 py-4 text-black text-2xl transition-all duration-100 ease-in-out flex">
                <div>
                  <PlayIcon className="h-8" />
                </div>
                <div className="ml-4">
                  <p>Play</p>
                </div>
              </button>
              
            </div>
          </div>
          

          <div className="m-10 flex flex-row">
            <div>
            <p className="text-xl">
              {overview}
            </p>
            </div>
            <div>
            <p className="text-xl ml-20">
              {overview}
            </p>
            </div>
          </div>
        </div>
        {/* <iframe
                        className="opacity-0"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
      </div>
    </div>
  );
}
