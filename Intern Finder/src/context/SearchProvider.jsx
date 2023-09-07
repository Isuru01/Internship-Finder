import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [results, setResults] = useState();
  const [search, setSearch] = useState();

  const value = {
    results,
    setResults,
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
