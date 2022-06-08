import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto m-5">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDINGS" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://i.pinimg.com/originals/ee/d2/fa/eed2fa4feef660b31e52300ae54659c1.png"
        width={200}
        height={60}
      />
    </header>
  );
}
