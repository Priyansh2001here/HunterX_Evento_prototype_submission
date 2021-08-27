import React from "react";

// If you don't have a version of React that supports
// hooks, you can use a class-based version of this
// component in ProgressProviderUsingClass.js
const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    const p = valueStart/valueEnd * 100;
    if (isNaN(p)) setValue(0); else setValue(p);
  }, [valueEnd, valueStart]);

  return children(value);
};
export default ProgressProvider;