import { useEffect, useState } from "react";
import Blog from "./../Blog/Blog";
import { PropTypes } from "prop-types";

const Blogs = ({ handleAddToBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="md:w-2/3 space-y-20">
      <h1 className="text-4xl ">Blogs {blogs.length}</h1>
      {blogs.map((blog) => {
        return (
          <>
            <Blog
              key={blog.id}
              blog={blog}
              handleAddToBookMark={handleAddToBookMark}
            ></Blog>
          </>
        );
      })}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
};

export default Blogs;
