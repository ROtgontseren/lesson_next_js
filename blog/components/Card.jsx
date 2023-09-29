import React from "react";

const Card = ({ blog }) => {
  return (
    <div className="border flex flex-col rounded-2xl ">
      <img className="w-[100%] h-[50%] rounded-t-2xl" src={blog.cover_image} />
      <div>
        <span>{blog?.type_of}</span>
        <h2>{blog.title}</h2>
      </div>
      <div className="flex p-4">
        <img
          className="h-[100px] w-[100px] rounded-full"
          src={blog.user.profile_image}
        />
        <p className="flex flex-col justify-center ml-4">{blog.user.name}</p>
      </div>
    </div>
  );
};

export default Card;
