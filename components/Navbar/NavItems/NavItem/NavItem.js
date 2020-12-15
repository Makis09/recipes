import Link from "next/Link";

export default function NavItem({ path, children, className }) {
  return (
    <li className={className}>
      <Link href={path}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
