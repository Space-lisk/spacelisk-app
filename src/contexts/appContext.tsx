"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { IAppContext, IUser } from "@/types/global.type";
// import axios from "axios";

export const AppContext = createContext<IAppContext | undefined>(undefined);

function AppProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  // }, []);

  return (
    <AppContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext<IAppContext | undefined>(AppContext)!;
}

export default AppProvider