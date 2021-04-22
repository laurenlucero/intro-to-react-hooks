import React, { useState, useContext } from "react";
import { Button } from "@edx/paragon";

/* INSTRUCTIONS for useContext
  Implement two components that consume the ClickContext:
    - ContextButton
      - should increment the count when clicked
      - add at least two of them
    - ClickReport
      - should display the click count
*/

const ClickContext = React.createContext();

const ClickContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <ClickContext.Provider value={[count, setCount]}>
      {children}
    </ClickContext.Provider>
  );
};

const ContextButton = ({ text, className }) => {
  const [count, setCount] = useContext(ClickContext);

  return (
    <Button
      className={className}
      onClick={() => setCount((prevCount) => prevCount + 1)}
    >
      {text}
    </Button>
  );
};

const ClickReport = () => {
  const [count] = useContext(ClickContext);
  return <div>There have been {count} clicks!</div>;
};

const TwoButtons = () => {
  return (
    <>
      <h1>useContext</h1>
      <ClickContextProvider>
        {/* Put Buttons and ClickReport here */}
        <ClickReport />
        <ContextButton text="Click me!" />
        <ContextButton text="Click me 2!" />
      </ClickContextProvider>
      {/* What happens if you put buttons here? */}
    </>
  );
};

export default TwoButtons;
