import { User } from "firebase/auth";
import { Context, createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

interface UserContextObject {
  currentUser: User | null;
}

const initContextObject: UserContextObject = {
  currentUser: null,
};

export const UserContext: Context<UserContextObject> =
  createContext(initContextObject);

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
