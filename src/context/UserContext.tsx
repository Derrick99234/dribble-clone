"use client";
import { UserData } from "@/interface/types";
import React, { createContext, Dispatch, useContext, useEffect, useState, } from "react";

interface UserContextType {
  userData: any;
  setUserData: Dispatch<any>
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = () => {
      try {
        const userData = sessionStorage.getItem('userData');
        if (userData) {
          setUserData(JSON.parse(userData));
          console.log(userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useCompany must be used within a UserProvider");
  }

  return context;
};
