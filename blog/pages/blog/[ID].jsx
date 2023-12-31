import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "/utils/functions";

const BlogDetail = ({ article }) => {
  return (
    <div className="max-sm:px-16 2xl:container mx-auto mt-24 max-w-4xl">
      <div>
        <div>
          <h1 className="text-4xl font-semibold text-slate-900 ">
            {article.title}
          </h1>
          <div className="flex items-center mt-5 gap-5">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src={article.user.profile_image}
                alt="avatar"
              />
              <h4 className="ml-2 text-lg text-gray-500">
                {article.user.name}
              </h4>
            </div>
            <p className="text-lg text-gray-500">
              {/* {formatDate(artilce.created_at)} */}
            </p>
            <h5></h5>
          </div>
        </div>
        <div className="my-8 text-justify">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const article = await res.json();
  return {
    props: { article },
    revalidate: 10,
  };
}

export async function getStaticPaths(id) {
  const res = await fetch(`https://dev.to/api/articles?per_pages=9`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    // fallback: false,
    fallback: "blocking",
  };
}
