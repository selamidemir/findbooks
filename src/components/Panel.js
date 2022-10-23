import React from "react";
import { useBooks } from "../contexts/BooksContext";
import Loading from "./Loading";
import Error from "./Error";
import Card from "./Card";

function Panel() {
  const { books, isLoading, error } = useBooks();

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
    </div>
  );
}

export default Panel;
