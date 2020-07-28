import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// Google Translate API Key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// http://localhost:3000

// options for menu
const options = [
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Dutch",
    value: "nl",
  },
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
  {
    label: "Greek",
    value: "el",
  },
];

const Translate = () => {
  // hooks
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
