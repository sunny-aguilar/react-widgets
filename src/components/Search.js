import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  // useEffect hook that takes two parameters: a function, and optional second param
  // that determines when the function is run
  useEffect(() => {
    // make GET request
    const search = async () => {
      await axios.get("");
    };
    search();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
