import React from "react";
import { useBooks } from "../contexts/BooksContext";
import Loading from "./Loading";
import Error from "./Error";
import Card from "./Card";

function Panel() {
  const { books, isLoading, error } = useBooks();
  
  // const handleLoadMore = e => {
  //   e.preventDefault();
  //   searchBooks();
  // }

  return (
    <div className="panel-cover">
      <div className="panel">
        {isLoading && <Loading />}
        {error && <Error error={error} />}
        {!isLoading &&
          !error &&
          books.items &&
          books.items.map((book, index) => <Card book={book} key={index} />)}
      </div>
      {/* {!isLoading && !error && books.items && ( books.items.length < totalItems) && <div><button onClick={(e) => handleLoadMore(e)}>Load More</button></div>} */}
    </div>
  );
}

export default Panel;
