import React, { useState } from "react";

const FolderStructure = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  console.log(data);
  return (
    <div>
      {data?.type === "folder" ? (toggle ? "-" : "+") : "-"}
      <span onClick={handleClick}>{data?.name}</span>
      {toggle &&
        data?.children?.map((item, index) => (
          <FolderStructure key={index} data={item} />
        ))}
    </div>
  );
};

export default FolderStructure;
