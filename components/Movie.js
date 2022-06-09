import { useContext } from "react";
import { MovieModalContext } from "../context/MovieModalContext";
import Image from "next/image";

export default function Movie() {
  const { movie, setMovie } = useContext(MovieModalContext);
  //const router = useRouter();
  //const movieID = router.query?.movie;
  console.log(movie);
  if (!movie) return null;
  const { id } = movie;
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const imageSource = `${BASE_URL}${movie.backdrop_path || movie.posterPath}`;
  console.log(imageSource);

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity">
          <div className="items-center mx-5 max-w-7xl">
        <div clasName="mx-full">
          <Image layout="responsive" height={1080} width={1920} src={imageSource} />
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
