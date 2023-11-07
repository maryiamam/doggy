import { Box, Container, Link, Toolbar } from "@mui/material";
import { useContext } from "react";
import nextId from "react-id-generator";
import { UserContext } from "../../contexts/user.context";
import AccountPopover from "../AccountPopover/AccountPopover";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import * as S from "./Navbar.styled";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Doggy", href: "/doggy" },
];

const authorizationLink = { name: "Sign In", href: "/auth" };

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const isAuthorized = currentUser != null;

  const renderLink = (
    link: Link,
    marginRight: number = 2,
    marginLeft: number = 0
  ) => {
    return (
      <S.Link key={nextId()} sx={{ mr: marginRight, ml: marginLeft }}>
        <Link underline="none" href={link.href}>
          {link.name}
        </Link>
      </S.Link>
    );
  };

  return (
    <S.Navbar position="static">
      <Container>
        <Toolbar>
          {links.map((link) => {
            return renderLink(link);
          })}
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
          >
            <ThemeSwitch />
            {isAuthorized ? (
              <AccountPopover />
            ) : (
              renderLink(authorizationLink, 0, 1)
            )}
          </Box>
        </Toolbar>
      </Container>
      <S.Border />
    </S.Navbar>
  );
};

export default Navbar;
