import React, { useState } from "react";

const DropdownSelectCountry = () => {
  const data = {
    USA: ["New York", "California", "Texas"],
    India: ["Delhi", "Mumbai", "Bangalore"],
  };

  const [country, setCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCities(data[e.target.value]);
  };

  return (
    <div>
      <select onChange={handleCountryChange}>
        <option>Select Country</option>
        {Object.keys(data).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <select>
        <option>Select City</option>
        {cities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelectCountry;
