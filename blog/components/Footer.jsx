import React from "react";

const Footer = () => {
  return (
    <div className="mb-24">
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
          <img src="public/facebook.svg" />
          <img src="picture/instagramm.svg" />
          <img src="picture/twitter.svg" />
          <img src="picture/linkedin.svg" />
        </div>
      </div>
      <div className="ml-[380px]">
        <h2>Email: Otgoohghg@yahoo.com</h2>
        <h2>Phone: 01023019686</h2>
      </div>
      <div className="flex justify-around">
        <img src="picture/Logo.png" />
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
