import classes from "./header.module.scss";

export default function header({ children }) {
  return <h1 className={classes.header}>{children}</h1>;
}
