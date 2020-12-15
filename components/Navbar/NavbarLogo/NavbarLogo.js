import Image from "next/image";
import Link from "next/Link";
import classes from "../Navbar.module.scss";
export default function NavbarLogo() {
  return (
    <Link href="/">
      <a className={classes.logo}>
        <Image src="/static/logo/logo.jpg" width={50} height={50} />
      </a>
    </Link>
  );
}
