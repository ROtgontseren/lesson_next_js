import React from "react";
import { SiFacebook } from "react-icons/Si";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
const Footer = () => {
  return (
    <div className="mb-24 flex flex-col gap-12 bg-slate-200 p-8">
      <div className="flex justify-evenly">
        <div>
          <h2>About</h2>
          <h3>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt <br />
            ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam
          </h3>
        </div>
        <div>
          <h2>Home</h2>
          <h2>Blog</h2>
          <h2>Contact</h2>
        </div>
        <div className="flex gap-2">
          <SiFacebook />
          <RiInstagramFill />
          <AiFillTwitterCircle />
          <ImLinkedin />
        </div>
      </div>
      <div className="m-auto">
        <h2>Email: Otgoohghg@yahoo.com</h2>
        <h2>Phone: 01023019686</h2>
      </div>
      <div className="flex justify-around">
        <div className="flex">
          <img src="Logo1.png" />
          <div className="">
            <h1>MetaBlog</h1>
            <h2>© All Rights Reserved.</h2>
          </div>
        </div>
        <div className="flex gap-4">
          <h2>Terms of Use</h2>
          <h2>Privacy Policy</h2>
          <h2>Cookie Policy</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
