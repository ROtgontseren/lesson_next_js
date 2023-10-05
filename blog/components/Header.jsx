import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="grid justify-center mt-12">
      <div className="flex justify-evenly w-[3000px]">
        <Link href={"../"}>
          <img src="Logo.png" />{" "}
        </Link>
        <div className="flex gap-[60px]">
          <Link href={"../"}>
            <h1>Home</h1>
          </Link>
          <Link href={"../blog"} ><h1>Blog</h1> </Link>
          <Link href={"../contact"}>
            <h1>Contact</h1>
          </Link>
        </div>
        <input
          className="border border-black rounded-xl p-2 bg-slate-100"
          type="text"
          placeholder="та хайх үгээ бичнэ үү?"
        />
      </div>
    </div>
  );
};

export default Header;
