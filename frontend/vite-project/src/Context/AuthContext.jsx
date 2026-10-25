import React, { createContext, useState } from "react";

export const authDataContext = createContext();

function AuthContextProvider({ children }) {
  let serverUrl = "https://havenly-backend-vrgt.onrender.com"
  let[loading,setLoading] = useState(false)

  let value = {
    serverUrl,
    loading,setLoading
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContextProvider;