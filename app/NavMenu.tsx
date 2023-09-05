import Link from "next/link";
import Image from "next/image";
import NavDropDown from "./NavDropDown";

function NavMenu() {
  return (
    <nav className="nav">
      <Link href="/">
        <Image src="/next.svg" width={150} height={20} alt="Logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
      <NavDropDown />
    </nav>
  );
}

export default NavMenu;
