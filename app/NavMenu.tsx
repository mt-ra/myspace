import Link from "next/link";
import Image from "next/image";
import NavDropDown from "./NavDropDown";
import { SignInButton, SignOutButton } from "@/components/buttons";

function NavMenu() {
  return (
    <nav className="nav">
      <Link href="/">
        <Image src="/next.svg" width={150} height={20} alt="Logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link href={'/about'} className="nav-link">About</Link>
        </li>
        <li>
          <Link href={'/blog'} className="nav-link">Blog</Link>
        </li>
        <li>
          <Link href={'/users'} className="nav-link">Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
      <NavDropDown />
    </nav>
  );
}

export default NavMenu;
