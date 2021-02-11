import Image from "next/image";
import Link from "next/link";
import classes from "../Navbar.module.scss";
export default function NavbarLogo() {
  return (
    <Link href="/">
      <a className={classes.logo}>
        <Image src="/logo/logo.jpg" width={50} height={50} />
      </a>
    </Link>
  );
}
