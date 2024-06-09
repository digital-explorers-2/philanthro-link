"use client";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
  user: User | null;
  setUser: (user: React.SetStateAction<User | null>) => void;
};

const AuthContext = createContext<UserContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): UserContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
