import { React, useState } from "react";

const Radiobtn = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="Option 1"
            onChange={handleRadioChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="Option 2"
            onChange={handleRadioChange}
          />
          Option 2
        </label>
      </div>
      <input type="text" value={selectedOption} readOnly />
    </div>
  );
};

export default Radiobtn;

const MyComponent = () => {};
