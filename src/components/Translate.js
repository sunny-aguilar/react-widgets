import React, { useState } from "react";
import Dropdown from "./Dropdown";

// options
const options = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  }
];

const Translate = () => {
  return <div><Dropdown /></div>;
};

export default Translate;
