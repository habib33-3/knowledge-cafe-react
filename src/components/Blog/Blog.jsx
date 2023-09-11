import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
      <img src={cover} alt="Cover Picture {title}" />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="{author}" />

          <div>
            <h3 className="text-2xl ">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>

      <h2 className="text-4xl">{title}</h2>

      <p className="space-x-3">
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
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
