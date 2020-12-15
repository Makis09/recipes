import { Avatar } from "@material-ui/core";
import classes from "../../Navbar.module.scss";
export default function NavUser() {
  return (
    <li>
      <Avatar
        className={classes.NavUser}
        src="/../static/images/Tagliatelle with Asparagus and Parmesan Fonduta.jpg"
        style={{ height: "60px", width: "60px" }}
        alt="/"
      />
    </li>
  );
}
