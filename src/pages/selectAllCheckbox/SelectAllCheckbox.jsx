import React, { useState } from "react";

function SelectAllCheckbox() {
  // State for managing the checkboxes
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Option 1", checked: false },
    { id: 2, label: "Option 2", checked: false },
    { id: 3, label: "Option 3", checked: false },
  ]);

  // Check if all checkboxes are selected
  const allChecked = checkboxes.every((cb) => cb.checked);
  console.log("allchecked", allChecked);
  // Check if some but not all checkboxes are selected
  const someChecked = checkboxes.some((cb) => cb.checked) && !allChecked;
  console.log("someChecked", someChecked);
  // Function to handle "Select All" toggle
  const handleSelectAll = () => {
    const newCheckedState = !allChecked;
    console.log("newCheckedState", newCheckedState);
    setCheckboxes(
      checkboxes.map((cb) => ({ ...cb, checked: newCheckedState }))
    );
  };

  // Function to handle individual checkbox toggle
  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((cb) =>
        cb.id === id ? { ...cb, checked: !cb.checked } : cb
      )
    );
  };

  return (
    <div>
      {/* "Select All" Checkbox */}
      <label>
        <input
          type="checkbox"
          checked={allChecked} // Fully checked when all checkboxes are checked
          onChange={handleSelectAll}
        />
        Select All
        {someChecked && " (Partial Selection)"}{" "}
        {/* Show message if partial selection */}
      </label>
      <br />

      {/* Individual Checkboxes */}
      {checkboxes.map((cb) => (
        <label key={cb.id}>
          <input
            type="checkbox"
            checked={cb.checked}
            onChange={() => handleCheckboxChange(cb.id)}
          />
          {cb.label}
        </label>
      ))}
    </div>
  );
}

export default SelectAllCheckbox;
