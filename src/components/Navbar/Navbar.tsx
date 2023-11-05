import { Container, Link } from "@mui/material";
import nextId from "react-id-generator";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import * as S from "./Navbar.styled";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Doggy", href: "/doggy" },
  { name: "Sign In", href: "/auth" },
];

const Navbar = () => {
  const renderLink = (link: Link) => (
    <S.Link key={nextId()}>
      <Link underline="none" href={link.href}>
        {link.name}
      </Link>
    </S.Link>
  );

  return (
    <S.Navbar position="static">
      <Container maxWidth="xl">
        <S.Toolbar>
          {links.map(renderLink)}
          <ThemeSwitch />
        </S.Toolbar>
      </Container>
      <S.Border />
    </S.Navbar>
  );
};

export default Navbar;
