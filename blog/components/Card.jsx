import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";

const Card = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id}>
      <div className="border flex flex-col rounded-2xl hover:scale-105 hover:skew-y-6 ">
        <img
          className="w-[100%] h-[50%] rounded-t-2xl"
          src={blog.social_image ? blog.social_image : "./Logo.png"}
        />
        <div className="p-6">
          <span className="font-bold text-xl">{blog?.type_of}</span>
          <h2 className="font-bold text-2xl truncate">{blog.title}</h2>
        </div>
        <div className="flex p-4 items-center gap-4">
          <img
            className="h-[100px] w-[100px] rounded-full"
            src={blog.user.profile_image}
          />
          <p className="flex flex-col justify-center ml-4">{blog.user.name}</p>
          {formatDate(blog.published_at)}
        </div>
      </div>
    </Link>
  );
};

export default Card;
