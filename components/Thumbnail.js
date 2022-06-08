import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";


export default function Thumbnail({ title, backdrop_path, posterPath, id, overview, original_name }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const imageSource = `${BASE_URL}${backdrop_path || posterPath}` 
  return (
    <div>
      <Image layout="responsive" height={1080} width={1920} src={imageSource} />
      <div className="p-2">
          <p className="runcate max-w-md">{overview}</p>
          <h2>
              {title || original_name}
          </h2>
          
          <p>{} <ThumbUpIcon /></p>
      </div>
    </div>
  );
}
