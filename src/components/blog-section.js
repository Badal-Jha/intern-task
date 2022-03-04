import React from "react";
import Blogs from "./blog-data";
const BlogSection = () => {
  return (
    <>
      <h1 className="uppercase text-3xl mt-[20px] text-center tracking-tighter">
        Latest from the Blog
      </h1>
      <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row px-6 mt-[10px]">
        {Blogs.map((blog) => {
          return (
            <div className=" w-[400px] flex flex-col justify-center lg:justify-start lg items-center mt-9">
              <img
                className="w-[400px] h-[320px] rounded-lg "
                src={blog.photo}
                alt="img"
              ></img>
              <h1 className="uppercase text-2xl font-bold mt-2 tracking-wide">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-400 tracking-wide mt-2">
                {blog.date}
              </p>
              <p className="mt-4 text-gray-400 tracking-wide font-thin">
                {blog.desc}
              </p>
              <button
                type="button"
                className="mt-[20px] text-black border-black border-2 h-[30px] w-[120px] text-center hover:bg-neutral-800 font-bold uppercase hover:text-white"
              >
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogSection;
