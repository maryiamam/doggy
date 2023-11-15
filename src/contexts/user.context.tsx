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

const localStorageKey = "currentUser";
const persistedUserString = localStorage.getItem(localStorageKey);

export const UserContext: Context<UserContextObject> =
  createContext(initContextObject);

export const UserProvider = ({ children }: Props) => {
  const persistedUser = persistedUserString
    ? JSON.parse(persistedUserString)
    : null;
  const [currentUser, setCurrentUser] = useState<User | null>(persistedUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      localStorage.setItem(localStorageKey, JSON.stringify(user));
    });

    return unsubscribe;
  }, []);

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
