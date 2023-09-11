import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import { useState } from "react";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    const remainingBookmarks = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookMarks(remainingBookmarks);
  };

  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  return (
    <>
      <Header></Header>
      <div className="gap-4 mx-auto md:flex max-w-7xl">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks
          readingTime={readingTime}
          bookMarks={bookMarks}
        ></BookMarks>
      </div>
    </>
  );
}

export default App;
