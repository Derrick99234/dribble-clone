"use client";
import { UserData } from "@/interface/types";
import React, { createContext, Dispatch, useContext, useState, } from "react";

interface UserContextType {
  userData: any;
  loading: boolean;
  setUserData: Dispatch<any>
  setLoading: Dispatch<any>
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ userData, loading,  setUserData, setLoading }}>
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
