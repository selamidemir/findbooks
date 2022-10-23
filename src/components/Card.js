import React, { useState } from "react";
import { useBooks } from "../contexts/BooksContext";
import BookDetails from "./BookDetails";

function Card({ book }) {
  const [showDetails, setShowDetails] = useState(false);
  const { getAuthorBooks } = useBooks();

  const handleAuthorBooks = (e) => {
    e.preventDefault();
    if (!book.volumeInfo.authors[0]) return;
    getAuthorBooks(book.volumeInfo.authors[0]);
  };

  const handleDetails = (e) => {
    e.preventDefault();
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      {showDetails && <BookDetails book={book} />}
      <div className="card-image">
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "no-image.svg"
          }
          alt={book.volumeInfo.title}
        />
      </div>
      <h4 className="card-title">
        {book.volumeInfo.title.substring(0, 67)}
        {book.volumeInfo.title.length > 67 && <span>...</span>}
      </h4>
      <div className="card-author">
        <a href="/#" onClick={(e) => handleAuthorBooks(e)}>
          {book.volumeInfo.authors && book.volumeInfo.authors[0]}
        </a>
      </div>
      <div className="card-action">
        PREVIEW |{" "}
        <a href="/#" onClick={(e) => handleDetails(e)}>
          DETAILS
        </a>
      </div>
    </div>
  );
}

export default Card;
