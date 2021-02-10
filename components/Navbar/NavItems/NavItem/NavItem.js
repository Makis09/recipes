import Link from "next/link";

export default function NavItem({ path, children, className }) {
  return (
    <li className={className}>
      <Link href={path}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
