import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import { useState } from "react";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto gap-4">
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
