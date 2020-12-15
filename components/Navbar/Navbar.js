import classes from "./Navbar.module.scss";
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import { Container } from "@material-ui/core";
import NavItems from "./NavItems/NavItems";
export default function Navbar() {
  return (
    <Container className={classes.navbar}>
      <NavbarLogo />
      <NavItems />
    </Container>
  );
}
