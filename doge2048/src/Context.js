import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [state, setState] = useState({ score: 0 });

  const value = {
    state,
    setState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
