import classes from "../../Navbar.module.scss";
export default function HamburgerIcon({ navHandler }) {
  return (
    <button className={classes.HamburgerIcon} onClick={navHandler}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
