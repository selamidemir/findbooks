import { createContext, useContext, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const maxItems = 50;
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (query) => {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_SEARCH_API_URL}${query}&startIndex=${startIndex}&maxItems=${maxItems}`;
    console.log(url)
    const res = await axios.get(url);
    setIsLoading(false);
    if (res.status !== 200) setError(res.error);
    else {
      setBooks(res.data);
      setTotalItems(res.data.totalItems);
      setStartIndex(books.length + res.data.items.length);
    };
  };

  const getAuthorBooks = async (authorName) => {
    setIsLoading(true);
    const res = await axios.get(
      `${process.env.REACT_APP_SEARCH_API_URL}+inauthor:${authorName}`
    );
    setIsLoading(false);
    if (res.status !== 200) setError(res.error);
    else {
      setBooks(res.data);
      setTotalItems(res.data.totalItems);
    };
  };

  const values = {
    books,
    error,
    setBooks,
    isLoading,
    maxItems,
    totalItems,
    searchBooks,
    getAuthorBooks,
  };

  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
