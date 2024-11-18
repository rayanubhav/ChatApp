import React, { createContext } from "react";
import Cookies from "js-cookie"; 
import { useContext  } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const Authprovider=({ children })=>  {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("messenger");

  const [AuthUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <>
      <AuthContext.Provider value={[AuthUser, setAuthUser ]}>
        {children}
      </AuthContext.Provider>
    </> 
  );
}

export const useAuth = () => useContext(AuthContext);
