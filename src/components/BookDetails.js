import React from "react";
import { useBooks } from "../contexts/BooksContext";

function BookDetails({ book, showWindow }) {
  const { getAuthorBooks } = useBooks();
  const handleClose = (e) => {
    showWindow(false);
  };

  const handleAuthor = (e, author) => {
    e.preventDefault();
    getAuthorBooks(author);
  };

  return (
    <div className="book-details-cover">
      <div className="book-details">
        <div className="book-header">
          <a href="/#" onClick={(e) => handleClose(e)} title="Close the window">
            X
          </a>
        </div>
        <div className="book-description-cover">
          <img
            className="book-image"
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "no-image.svg"
            }
            alt={book.volumeInfo.title}
          />
          <h4 className="book-title">{book.volumeInfo.title}</h4>
          <div className="book-description">
            {book.volumeInfo.description && book.volumeInfo.description.substring(0, 299)}...
          </div>
          <hr />
          <div className="book-info">
            <span>Authors : </span>
            {book.volumeInfo.authors &&
              book.volumeInfo.authors.map((author, index) => (
                <span key={index} className="book-author">
                  <a href="/#" onClick={(e) => handleAuthor(e, author)}>
                    {author.toUpperCase()}
                  </a>
                </span>
              ))}
          </div>
          <div className="book-info">
            <span>Pages: </span>
            {book.volumeInfo.pageCount}
          </div>
          <div className="book-info"><span>Publisher: </span> {book.volumeInfo.publisher}</div>
          <div className="book-info"><span>Published Date: </span> {book.volumeInfo.publishedDate}</div>
          {book.saleInfo.saleability === "FOR_SALE" && (
            <div className="book-info">
              <span>Price: </span>
                {`${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`}
            </div>
          )}
        <hr />
        <div className="book-info center"><a className="btn-link" href={book.volumeInfo.infoLink}>GO TO BOOK PAGE</a></div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
