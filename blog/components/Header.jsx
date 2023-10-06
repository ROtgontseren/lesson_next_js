import React from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <div className="grid justify-center mt-12 max">
      <div className="sm:grid grid-rows-3 gap-6 lg:flex 2xl:w-screen justify-evenly">
        <Link href={"../"}>
          <img src="Logo.png" />{" "}
        </Link>
        <div className="flex gap-[60px]">
          <Link href={"../"}>
            <h1>Home</h1>
          </Link>
          <Link href={"../blog"}>
            <h1>Blog</h1>{" "}
          </Link>
          <Link href={"../contact"}>
            <h1>Contact</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <input
            className="border border-black rounded-xl p-2 bg-slate-100 absolute z-0 w-[220px]"
            type="text"
            placeholder="та хайх үгээ бичнэ үү?"
          />
          <button className="relative z-10 left-[190px]">
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
