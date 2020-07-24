import React from "react";

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((options) => {
    return (
      <div className="item" key={options.value}>
        {options.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
      </div>
    </div>
  );
};

export default Dropdown;
