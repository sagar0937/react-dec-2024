import React, { useState, useMemo } from "react";

const FilterList = () => {
  const [search, setSearch] = useState("");
  const items = ["apple", "banana", "grape", "orange", "pear"];

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  return (
    <div>
      <h1>Filtered List</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
