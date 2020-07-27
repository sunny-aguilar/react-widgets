import React, { useState } from "react";
import Dropdown from "./Dropdown";

// options for menu
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  // hooks
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default Translate;
