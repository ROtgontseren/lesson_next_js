import React from "react";
import { SiFacebook } from "react-icons/Si";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid justify-center bg-slate-100 ">
      <div className="mb-12 flex flex-col gap-12 w-screen justify-evenly">
        <div className="sm:grid grid-rows-1 gap-16 lg:grid-cols-2 px-36 2xl:flex justify-evenly mt-12">
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
            <h2 className="mt-8 ">
              <span className="font-bold">Email:</span> info@jstemplate.net
            </h2>
            <h2>
              <span className="font-bold">Phone:</span> Phone : 880 123 456 789
            </h2>
          </div>
          <div>
            <Link href={"../"}>
              <h2 className="font-semibold">Home</h2>
            </Link>
            <Link href={"../blog"}>
              <h2 className="font-semibold">Blog</h2>
            </Link>
            <Link href={"../contact"}>
              <h2 className="font-semibold">Contact</h2>
            </Link>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <SiFacebook />
            <RiInstagramFill />
            <AiFillTwitterCircle />
            <ImLinkedin />
          </div>
        </div>
        <div className="sm:grid grid-rows-1 gap-8 lg:grid-cols-2 2xl:flex mb-12 justify-around mx-16">
          <div className="flex">
            <img src="Logo1.png" />
            <div className="p-2">
              <h1>
                Meta<span className="font-bold">Blog</span>
              </h1>
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
