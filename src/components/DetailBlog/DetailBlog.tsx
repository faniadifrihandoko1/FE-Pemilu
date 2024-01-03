import React from "react";
import { useParams } from "react-router-dom";
import data from "../../utils/constant/data";

const DetailBlog: React.FC = () => {
  const { id } = useParams();
  const blog = data.find((blog) => blog.id === parseInt(id as string));
  console.log(blog);
  return (
    <div>
      <div className="container px-6 max-w-xl sm:max-w-6xl mb-9 mx-auto   md:px-16 xl:px-7 ">
        <div>
          <p className="text-center my-3">BERITA HARI INI</p>
        </div>
        <h1 className="font-bold text-lg md:text-2xl text-center ">
          {blog?.title}
        </h1>
        <p className="text-center">{blog?.author}</p>
        <p className="text-center text-slate-700 text-sm">{blog?.date}</p>
        <img
          className="my-4 md:w-full md:h-96 rounded-xl shadow-xl"
          src={blog?.image}
          alt=""
        />
        <p className="text-justify">{blog?.desc}</p>
        <p className="my-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi
          in accusamus placeat! Est, iusto atque beatae ipsa aperiam cupiditate
          exercitationem aut, vitae labore odio harum nulla provident doloribus
          praesentium? Voluptates dicta sit tempora temporibus. Assumenda, eaque
          est. Assumenda tempore fugiat unde facilis. Accusamus placeat quidem
          pariatur. Pariatur quisquam molestias id nostrum reprehenderit
          sapiente cumque, aperiam maiores totam expedita possimus? Alias
          explicabo asperiores velit aspernatur impedit ullam ad tempora,
          accusantium eos expedita adipisci itaque nemo eum unde. Tempora
          necessitatibus reprehenderit minus deserunt et maiores quia nostrum
          nisi soluta, totam neque.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          tempora quidem, necessitatibus iure perspiciatis magni, eum qui nemo
          esse sit animi molestias atque nulla. Voluptatem necessitatibus libero
          facilis atque obcaecati. Quos, voluptates assumenda? Provident
          perspiciatis delectus, repudiandae architecto tempore libero deserunt
          quod quia suscipit rerum animi labore consectetur dolore fugit
          consequatur, ea quam explicabo laborum? Aperiam libero quam facere
          blanditiis? Deleniti, repellat fuga, rem sunt, dolore excepturi quae
          aliquid adipisci odit quod ex dolor accusamus magni esse. Fugiat odit
          pariatur libero minus ex sunt rerum, eius sit assumenda, esse sed?
        </p>
      </div>
    </div>
  );
};

export default DetailBlog;
