import { getCurrentUser } from "@/lib/appwrite";
import React, { createContext, useEffect, useState } from "react";
import { Models } from "react-native-appwrite";

interface UserContextType {
  user: Models.Document | null;
  setUser: (user: Models.Document | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Models.Document | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getCurrentUser();

        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ isLoading, setIsLoading, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
