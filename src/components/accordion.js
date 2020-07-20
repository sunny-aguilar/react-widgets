import React from "react";

const Accordion = ({items}) => {
  const renderedItems = items.map(item => {
    return (
      <div>
        <div className="title active">
          <i className="dropdown icion"></i>
          {item.title}
        </div>
      </div>
    );
  });
  return <div>{items.length}</div>;
};

export default Accordion;
