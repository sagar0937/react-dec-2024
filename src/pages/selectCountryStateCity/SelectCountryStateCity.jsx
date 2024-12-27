import React, { useState } from "react";

const data = {
  countries: {
    USA: {
      states: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Houston", "Dallas", "Austin"],
      },
    },
    Canada: {
      states: {
        Ontario: ["Toronto", "Ottawa", "Hamilton"],
        Quebec: ["Montreal", "Quebec City", "Laval"],
      },
    },
  },
};

const SelectCountryStateCity = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const countries = Object.keys(data.countries);
  console.log("countries", countries);
  const states = selectedCountry
    ? Object.keys(data.countries[selectedCountry].states)
    : [];
  console.log("states", states);
  const cities = selectedState
    ? data.countries[selectedCountry].states[selectedState]
    : [];
  console.log("cities", cities);
  return (
    <div>
      <h1>Select Country, State, and City</h1>
      <div>
        <label>
          Country:
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          State:
          <select
            value={selectedState}
            onChange={handleStateChange}
            disabled={!selectedCountry}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          City:
          <select
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <h2>Selected:</h2>
        <p>Country: {selectedCountry}</p>
        <p>State: {selectedState}</p>
        <p>City: {selectedCity}</p>
      </div>
    </div>
  );
};

export default SelectCountryStateCity;
