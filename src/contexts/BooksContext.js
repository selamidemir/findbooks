import { createContext, useContext, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (query) => {
    setIsLoading(true);
    const res = await axios.get(`${process.env.REACT_APP_SEARCH_API_URL}query`);
    setIsLoading(false);
    console.log(res.data);
    if (res.status !== 200) setError(res.error);
    else setBooks(res.data);
  };

  const getAuthorBooks = async (authorId) => {
    console.log(authorId);
    // inauthor:keyes
    setIsLoading(true);
    const res = await axios.get(
      `${process.env.REACT_APP_SEARCH_API_URL}+inauthor:${authorId}`
    );
    setIsLoading(false);
    console.log(res.data);
    if (res.status !== 200) setError(res.error);
    else setBooks(res.data);
  };

  const values = {
    books,
    error,
    setBooks,
    isLoading,
    searchBooks,
    getAuthorBooks,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
