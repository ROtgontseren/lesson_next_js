import React from "react";

const Header = () => {
  return (
    <div className="grid justify-center mt-12">
       <div className="flex justify-evenly w-[3000px]">
            <img src="Logo.png" />
            <div className="flex gap-[60px]">
                 <h1>HOME</h1>
                 <h1>BLOG</h1>
                 <h1>CONTACT</h1>
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
