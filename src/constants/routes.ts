import Account from "../routes/Account/Account";
import Authentication from "../routes/Authentication/Authentication";
import DoggyMultiplier from "../routes/DoggyMultiplier/DoggyMultiplier";
import Favorites from "../routes/Favorites/Favorites";

export interface Route {
  name: string;
  path: string;
  component: () => JSX.Element;
  auth: boolean;
}

const ROUTES = {
  home: {
    name: "Home",
    path: "/",
    component: DoggyMultiplier,
    auth: false,
  },
  doggy: {
    name: "Doggy",
    path: "/doggy",
    component: DoggyMultiplier,
    auth: false,
  },
  favorites: {
    name: "Favorites",
    path: "/favorites",
    component: Favorites,
    auth: true,
  },
  auth: {
    name: "Sign In",
    path: "/auth",
    component: Authentication,
    auth: false,
  },
  account: {
    name: "Account",
    path: "/account",
    component: Account,
    auth: true,
  },
};

export default ROUTES;
