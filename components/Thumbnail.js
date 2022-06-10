import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useContext } from "react";
import { MovieModalContext } from "../context/MovieModalContext";

const Thumbnail = (movieInfo) => {
  const { title, overview, release_date, vote_count, imageThumbSource, id } = movieInfo;
  const { setMovie } = useContext(MovieModalContext);

  return (
    <div
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={() => setMovie(movieInfo)}
    >
      <Image layout="responsive" height={1080} width={1920} src={imageThumbSource} />
      <div className="p-2">
        <p className="truncate max-w-md">{overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {release_date} <ThumbUpIcon className="h-5 mx-2" />
          {vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
