// { useState } is to use Hooks
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

const Accordion = ({ items }) => {
  // array destructuring
  // useState(null) returns an array with two items
  const [activeIndex, setActiveIndex] = useState(null);
  // const things = useState(null);
  // const activeIndex = things[0];
  // const seActiveIndex = things[1];

  // helper function inside functional component
  const onTitleClick = index => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          // must wrap onTitleClick(index) with arrow function othersise
          // it is invoked on rendering
          onClick={() => {
            onTitleClick(index);
          }}
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

return <div className="ui styled accordion">{renderedItems}<h1>{activeIndex}</h1></div>;
};

export default Accordion;
