import React from "react";

const Accordion = ({items}) => {
  const renderedItems = items.map(item => {
    return (
      <div key={iteml.title}>
        <div className="title active">
          <i className="dropdown icion"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <div>{items.length}</div>;
};

export default Accordion;
