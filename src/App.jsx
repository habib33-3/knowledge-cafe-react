import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import { useState } from "react";

function App() {
  const [bookMark, setBookMark] = useState([]);

  const handleAddToBookMark = (blog) => {
    console.log("bookamrk added");
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
