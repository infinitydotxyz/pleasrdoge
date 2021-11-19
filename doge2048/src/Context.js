import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [score, setScore] = useState(0);

  const value = {
    score,
    setScore,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
