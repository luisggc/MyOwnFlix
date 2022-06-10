import { useState, useRef, useContext } from "react";
import { MovieModalContext } from "../context/MovieModalContext";
import Image from "next/image";
import { ThumbUpIcon, PlayIcon, ReplyIcon, XIcon, FireIcon } from "@heroicons/react/outline";

export default function Movie() {
  const { movie, setMovie } = useContext(MovieModalContext);
  const [isPlaying, setIsPlaying] = useState(false);
  //const [ movie, setMovie ] = useState({ backdrop_path: "/i5dUmY2xRzgkmjHJYKNj8kPX1Xx.jpg" });
  //const router = useRouter();
  //const movieID = router.query?.movie;
  //console.log(movie);
  const content = useRef();

  if (!movie) return <></>;
  //const { id } = movie;

  const closeModal = () => {
    setMovie(false);
  };

  const { title, overview, release_date, vote_count, popularity, imageOriginalSource} = movie;

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
        <div
          ref={content}
          className="absolute rounded z-50 bg-[#131A28]  overflow-hidden mx-10 max-w-7xl drop-shadow-2xl"
        >
          <div className="relative">
            {isPlaying ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&rel=0&loop=1"
                  title="Never Gonna Give You Up"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div>
                <Image layout="responsive" height={1080} width={1920} src={imageOriginalSource} />
              </div>
            )}
            <div className="absolute bottom-0 bg-gradient-to-t from-[#131A28] h-52 w-full"></div>
            <div className="absolute top-4 right-4 p-5 cursor-pointer" onClick={closeModal}>
              <XIcon className="h-8" />
            </div>
            <div className="absolute bottom-0 ml-16 mb-10">
              <div className="max-w-xl">
                {!isPlaying && <h2 className="text-7xl drop-shadow-sm">{title}</h2>}
              </div>
              {!isPlaying ? (
                <button
                  className="bg-white font-bold rounded-md px-8 my-6 py-4 text-black text-2xl transition-all duration-100 ease-in-out flex"
                  onClick={() => setIsPlaying((s) => !s)}
                >
                  <div>
                    <PlayIcon className="h-8" />
                  </div>

                  <div className="ml-4">
                    <p>Play</p>
                  </div>
                </button>
              ) : (
                <div className="p-5 cursor-pointer" onClick={() => setIsPlaying((s) => !s)}>
                  <ReplyIcon className="h-8" />
                </div>
              )}
            </div>
          </div>

          <div className="m-10 p-10 flex flex-row">
            <div>
              <p className="text-xl">{overview}</p>
            </div>
            <div className="w-96 ml-6">
              <p>Released date:</p>
              <p>{release_date} </p>
              <p className="flex mt-2">
                <ThumbUpIcon className="h-5 mr-2 " /> {vote_count}
              </p>
              <p className="flex mt-2">
                <FireIcon className="h-5 mr-2 " /> {Math.round(popularity)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
