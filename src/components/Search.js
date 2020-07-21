import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  console.log("I run with every render");
  // useEffect hook that takes two parameters: a function, and optional second param
  // that determines when the function is run
  useEffect(() => {
    console.log("I run after every render and at initial render");
  });

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
