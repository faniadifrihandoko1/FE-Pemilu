import { Link } from "react-router-dom";
import { blog } from "../../types/blog";

function Blog({ id, title, image, date, author, desc }: blog) {
  return (
    <div className="bg-white mb-4 p-4  rounded-md ">
      <img
        src={image}
        alt=""
        className="w-full h-full mb-4 rounded-md xl:h-56 "
      />
      <div className="bg-red-600 w-auto inline-block rounded-lg px-4 py-1 mb-4">
        <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">
          {date}
        </h3>
      </div>
      <div>
        <Link
          to={`/blog/${id}`}
          className="font-bold text-xl md:text-2xl lg:text-3xl ms-1"
        >
          {title}
        </Link>
        <h3 className="text-sm sm:text-base md:text-lg mb-2">{author}</h3>
        <p className="hidden">{desc}</p>
      </div>
    </div>
  );
}

export default Blog;
