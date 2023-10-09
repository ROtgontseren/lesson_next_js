// import React from "react";
// import { useState, useEffect } from "react";
// import Card from "@/components/Card";
// import Loader from "@/components/Loader";

// const Recentblog = ({ blogs }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [pages, setPages] = useState(9);

//   useEffect(() => {
//     fetchData();
//   }, [pages]);

//   function Handleclick() {
//     setPages(pages + 3);
//   }
//   console.log("hand", pages);

//   const fetchData = async () => {
//     const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
//     const data = await res.json();
//     console.log(data);
//     setBlogs(data);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2 className="font-bold text-2xl m-auto">All Blog Post</h2>{" "}
//       <div className="container mx-auto mt-12">
//         {isLoading && <Loader />}
//         {!isLoading && <div className="grid justify-center"></div>}
//         <div className="sm:grid grid-cols-1 gap-16 mx-12 my-12 lg:grid-cols-2 2xl:grid-cols-3">
//           {blogs?.map((blog, i) => {
//             return <Card blog={blog} />;
//           })}
//         </div>
//       </div>
//       <div className="flex justify-center mb-24">
//         <button
//           className="border text-black border-slate-200 w-36 h-14 rounded-xl hover:bg-blue-400 hover:text-white hover:scale-105 "
//           onClick={() => {}}
//         >
//           Load More ...
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Recentblog;
