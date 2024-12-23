import React, { useEffect, useState } from "react";

const useWindowresize = () => {
  const [data, setData] = useState({
    height: "",
    width: "",
  });
  useEffect(() => {
    function handleResize() {
      setData({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data.height, data.width]);
  return { data };
};

export default useWindowresize;
