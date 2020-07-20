import React from "react";

const Accordion = ({ items }) => {
  // helper function inside functional component
  const onTitleClick = index => {
    console.log('Title clicked ', index);
  }

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={items.title}>
        <div
          className="title active"
          // must wrap onTitleClick(index) with arrow function othersise
          // it is invoked on rendering
          onClick={() => {onTitleClick(index)}}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
