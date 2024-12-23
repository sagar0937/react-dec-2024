import React, { useEffect, useState } from "react";
import useDebounced from "../../hooks/useDebounced";

const DebounceUse = () => {
  const [search, setSearch] = useState("");
  const { debounceVal } = useDebounced(search, 1000);
  useEffect(() => {
    if (debounceVal) {
      console.log("API Call: ", debounceVal);
    }
  }, [debounceVal]);

  return (
    <div>
      DebounceUse
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search text"
      />
    </div>
  );
};

export default DebounceUse;
