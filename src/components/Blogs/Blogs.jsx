import { useEffect, useState } from "react";
import Blog from "./../Blog/Blog";
import { PropTypes } from "prop-types";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
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
    <div className="space-y-20 md:w-2/3">
      <h1 className="text-4xl ">Blogs {blogs.length}</h1>
      {blogs.map((blog) => {
        return (
          <>
            <Blog
              key={blog.id}
              blog={blog}
              handleAddToBookMark={handleAddToBookMark}
              handleMarkAsRead={handleMarkAsRead}
            ></Blog>
          </>
        );
      })}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
