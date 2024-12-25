import React, { useRef, useState } from "react";
import { useEffect } from "react";

const TextAreaRef = () => {
  const textRef = useRef();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(textRef.current.value.length - 100);
  };

  return (
    <div>
      <p>TextAreaRef</p>
      <textarea
        ref={textRef}
        onChange={handleChange}
        maxLength={"100"}
        rows={"5"}
        cols={"50"}
      ></textarea>
      <p>Value:{value}</p>
    </div>
  );
};

export default TextAreaRef;
