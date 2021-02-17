import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (debouncedTerm) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      search(debouncedTerm);
    }, 500);
    return () => clearTimeout(timerId);
  }, [debouncedTerm]);

  const search = async (term) => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term
      }
    });
    if (data.query) setResults(data.query.search);
  };

  return [results];
};

export default useSearch;
