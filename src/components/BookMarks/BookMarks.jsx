import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks }) => {
  return (
    <div className="md:w-1/3 bg-gray-300">
      <h2 className="text-3xl text-center  p-3">
        BookMarked Blog: {bookMarks.length}
      </h2>
      {bookMarks.map((bookMark) => {
        return (
          <>
            <BookMark
              key={bookMark.id}
              bookMark={bookMark}
            ></BookMark>
          </>
        );
      })}
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
};

export default BookMarks;
