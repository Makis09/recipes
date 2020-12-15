import { useState } from "react";
import classes from "../Navbar.module.scss";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import NavItem from "./NavItem/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavUser from "./NavUser/NavUser";

export default function NavItems() {
  const [navCollapsed, setNavCollapsed] = useState(true);

  const toggleNav = () => {
    setNavCollapsed(!navCollapsed);
  };

  return (
    <>
      <HamburgerIcon navHandler={toggleNav} />
      <div
        className={`${classes.navItems} ${
          navCollapsed ? classes.navCollapsed : ""
        }`}
      >
        <ul>
          <NavItem path="/">Home</NavItem>
          <NavItem path="/contact">Contact</NavItem>
          <NavItem path="/sign-in" className={classes.signIn}>
            <FontAwesomeIcon icon={"sign-in-alt"} />
            Sign in
          </NavItem>
          <NavItem path="/sign-up" className={classes.signUp}>
            <FontAwesomeIcon icon={"user-plus"} />
            Sign up
          </NavItem>
          <NavUser />
        </ul>
      </div>
    </>
  );
}
