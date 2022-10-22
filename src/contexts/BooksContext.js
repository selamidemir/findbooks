import { createContext, useContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const values = {
    books,
    setBooks,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
