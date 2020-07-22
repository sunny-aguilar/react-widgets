import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");       // initial value is empty string
  const [results, setResults] = useState([]); // initial value is empty array
  console.log(results);
  // useEffect hook that takes two parameters: a function, and optional second param
  // that determines when the function is run
  useEffect(() => {
    // make GET request
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          srsearch: term
        }
      });
      setResults(data);
    };

    // check if term is defined before searching
    if (term) {
      search();
    }

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
