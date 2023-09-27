import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around mt-12">
      <img src="@public/Logo.png" />
      <div className="flex gap-[60px]">
        <h1>HOME</h1>
        <h1>BLOG</h1>
        <h1>CONTACT</h1>
      </div>
      <input
        className="border border-black rounded-xl p-2 bg-slate-200"
        type="text"
        placeholder="та хайх үгээ бичнэ үү?"
      />
    </div>
  );
};

export default Header;
