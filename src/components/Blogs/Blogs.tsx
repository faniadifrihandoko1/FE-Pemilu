import React from "react";
import data from "../../utils/constant/data";
import Blog from "../Blog/Blog";
import { blog } from "../../types/blog";
import { Link } from "react-router-dom";

const Blogs: React.FC = () => {
  const blogs = data;
  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3  gap-4 px-4 lg:px-24 my-8">
        {blogs.map(function (data: blog, index: number) {
          if (index === 0) {
            // Render the first blog post with a different structure
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${data.image})`,
                }}
                className="md:col-span-2 flex flex-col col-span-1 h-64 rounded-lg sm:h-96 lg:h-[445px] sm:mb-4 "
              >
                <div className="ms-1 mt-auto px-1 py-2 text-white">
                  <h3 className="text-white font-semibold bg-red-600 w-auto inline-block rounded-lg px-4 ms-1 mt-2 py-1">
                    {data.date}
                  </h3>
                  <Link
                    to={`/blog/${data.id}`}
                    className="font-bold text-xl md:text-2xl lg:text-3xl ms-1"
                  >
                    {data.title}
                  </Link>
                  <h3 className="ms-1">{data.author}</h3>
                </div>
              </div>
            );
          } else {
            // Render other blog posts using the original structure
            return (
              <div key={index}>
                <Blog
                  id={data.id}
                  title={data.title}
                  image={data.image}
                  date={data.date}
                  author={data.author}
                  desc={data.desc}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Blogs;
