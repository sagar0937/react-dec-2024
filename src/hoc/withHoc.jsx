// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     console.log("props", props);
//     const isAuthenticated = true; // Replace with real auth logic
//     if (!isAuthenticated) return <p>Please log in.</p>;
//     return <WrappedComponent {...props} />;
//   };
// };
// export default withAuth;

import { useState } from "react";

const withHOC = (OldComponent, increment = 1) => {
  const NewEnhancedComponent = (props) => {
    console.log("---", props);
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + increment);
    };
    return (
      <OldComponent
        {...props}
        count={count}
        handleIncrement={handleIncrement}
      />
    );
  };
  return NewEnhancedComponent;
};
export default withHOC;
