import React, { useState } from "react";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results] = useSearch(term);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label>Introduce tu búsqueda</label>
        <input
          className="input"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        ></input>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
