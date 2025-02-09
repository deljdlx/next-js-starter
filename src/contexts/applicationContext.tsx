import React, { createContext, useContext, useState, ReactNode } from "react";

type ApplicationContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};


const ApplicationContext = createContext<ApplicationContextType | null>(null);

export const ApplicationContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("demo-00");

  return (
    <ApplicationContext.Provider value={{
        theme,
        setTheme,
    }}>
        {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useApplicationContext must be used within an ApplicationContextProvider");
  }
  return context;
};