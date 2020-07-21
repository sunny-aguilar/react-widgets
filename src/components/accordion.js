// { useState } is to use Hooks
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

const Accordion = ({ items }) => {
  // array destructuring
  // useState(null) returns an array with two items
  // activeIndex -> variable we are tracking (var name can be anything we want)
  // setActiveIndex -> updates state variable (like a setter) (var function name can be anything)
  // (null) is the initial value/state of the variable
  const [activeIndex, setActiveIndex] = useState(null); // useState hook
  // here is what above looks like written w/o array destructuring
  // const things = useState(null);
  // const activeIndex = things[0];
  // const seActiveIndex = things[1];

  // helper function inside functional component
  // React re-renders the page whenever a setter hook functions updates
  // a state variable
  const onTitleClick = index => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : '';

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
