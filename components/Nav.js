import requests from "../api/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      {/* Could improve here to scroll right when try to scroll down here */}
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 scrollbar-hide overflow-y-hidden overflow-x-scroll">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#131A28] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
