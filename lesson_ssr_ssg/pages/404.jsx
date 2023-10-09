import Link from "next/link";
import React from "react";
Link;

const Error = () => {
  return (
    <div className="grid justify-center my-[100px] h-[550px] items-center">
      <div className="flex gap-8 w-[642px] h-[208px] justify-center items-center">
        <div className="border-r-4 p-8">
          <h1 className="text-7xl">404</h1>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Page Not Found</h1>
          <h2>
            We're sorry, This page is unknown or does <br /> not exist the page
            you are looking for.
          </h2>
          <Link href={"./"}>
            <button className="border rounded-lg bg-blue-600 w-[138px] h-[40px] text-white">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
