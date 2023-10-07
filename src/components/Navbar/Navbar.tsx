import { AppBar, Container, Link, Toolbar } from "@mui/material";
import nextId from "react-id-generator";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Navbar.scss";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Doggy", href: "/doggy" },
  { name: "Sign In", href: "/sign-in" },
];

const Navbar = () => {
  const renderLink = (link: Link) => (
    <div key={nextId()} className="link">
      <Link underline="none" href={link.href}>
        {link.name}
      </Link>
    </div>
  );

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="toolbar">
          {links.map(renderLink)}
          <ThemeSwitch />
        </Toolbar>
      </Container>
      <div className="border"></div>
    </AppBar>
  );
};

export default Navbar;
