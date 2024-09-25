import React, { createContext, useState } from "react"; // Import React

export const NameContext = createContext({
  name: "",
  setName: () => {},
});

export const NameProvider = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
