import { createContext, useContext, useState } from "react";

const CountContext = createContext(); // Create a context component with the built-in createContext() function

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}> {/* CountContext is the custom name of the component while Provider is the built-in React component that allows consuming the context */}
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
