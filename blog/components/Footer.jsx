import React from "react";
import { SiFacebook } from "react-icons/Si";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
const Footer = () => {
  return (
    <div className="grid justify-center bg-slate-100">
      <div className="mb-24 flex flex-col gap-12 w-[3000px]">
        <div className="flex justify-evenly mt-12">
          <div>
            <h2 className="font-bold text-xl">About</h2>
            <h3>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt <br />
              ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam
            </h3>
            <h2 className="mt-8 ">Email: info@jstemplate.net</h2>
            <h2>Phone: Phone : 880 123 456 789</h2>
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
        <div className="flex mb-12 justify-around mx-16">
          <div className="flex">
            <img src="Logo1.png" />
            <div className="p-2">
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
    </div>
  );
};

export default Footer;
