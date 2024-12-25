import { React, useState, useRef, forwardRef } from "react";

const ForwardRef = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const childInputRef = useRef();

  const toggleInput = () => {
    setIsEnabled((prev) => !prev);
    if (childInputRef.current) {
      childInputRef.current.focus();
    }
  };
  return (
    <div>
      <button onClick={toggleInput}>{isEnabled ? "Disable" : "Enable"}</button>
      <ChildComponent ref={childInputRef} isEnabled={isEnabled} />
    </div>
  );
};
const ChildComponent = forwardRef(({ isEnabled }, ref) => {
  return <input ref={ref} disabled={!isEnabled} />;
});
export default ForwardRef;
