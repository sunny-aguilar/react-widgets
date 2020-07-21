import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Search;
