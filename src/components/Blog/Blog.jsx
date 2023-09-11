import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    hashtags,
    posted_date,
  } = blog;

  return (
    <>
      <div>
        <img
          className="w-full"
          src={cover}
          alt="Cover Picture {title}"
        />
        <div className="flex justify-between mt-5">
          <div className="flex gap-6">
            <img
              className="w-14"
              src={author_img}
              alt="{author}"
            />

            <div className="mt-8">
              <h3 className="text-2xl ">{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>

          <div className="space-x-2">
            <span>{reading_time} min read</span>
            <button
              onClick={() => handleAddToBookMark(blog)}
              className="text-red-600 text-2xl "
            >
              <FaBookmark></FaBookmark>
            </button>
          </div>
        </div>

        <h2 className="text-4xl">{title}</h2>

        <p className="space-x-3 mt-4">
          {hashtags.map((hash, idx) => {
            return (
              <>
                <span key={idx}>
                  <a href="">#{hash}</a>
                </span>
              </>
            );
          })}
        </p>
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookMark: PropTypes.func,
};
export default Blog;
