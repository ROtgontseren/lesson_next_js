import React from "react";

const contact = () => {
  return (
    <div className="grid justify-center mt-[100px]">
      <div className="sm:m-auto w-2/4 md:w-2/4 2xl:w-2/4 p-6">
        <h1 className="sm:px-12 2xl:font-semibold text-4xl ">Contact Us</h1>
        <h2 className="sm:px-12 2xl:text-2xl mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </h2>
        <div className="sm:grid grid-col md:grid-cols items-center gap-[60px] 2xl:flex justify-center mt-6 ">
          <div className="gap-6 w-[294px] border p-6 rounded-lg">
            <h1 className="text-2xl font-semibold">Address</h1>
            <h2 className="text-[18px]">
              1328 Oak Ridge Drive, <br /> Saint Louis, Missouri
            </h2>
          </div>
          <div className="gap-6 w-[294px] border p-6 rounded-lg">
            <h1 className="text-2xl font-semibold">Contact</h1>
            <h2 className="text-[18px]">
              313-332-8662 <br /> info@email.com
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border rounded-2xl p-6 flex flex-col gap-8 bg-slate-200 my-[100px] w-[600px] items-center justify-center">
          <h1 className="text-4xl font-semibold">Leave a Message</h1>
          <div className="mt-8 w-[478px] flex flex-row justify-between">
            <input
              className="w-[225px] h-[38px] rounded-lg p-4 border"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-[225px] h-[38px] rounded-lg p-4 border"
              type="text"
              placeholder="Email"
            />
          </div>
          <input
            className="w-[478px] h-[28px] rounded-lg border p-2"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-[478px] h-[134px] rounded-xl border p-2"
            type="text"
            placeholder="Write a message"
          />
          <button className="border bg-blue-600 text-white w-[138px] h-[40px] rounded-xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default contact;
