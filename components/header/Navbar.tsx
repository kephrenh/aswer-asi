import Image from "next/image";
import Link from "next/link";
import logo from "@public/assets/images/aswer-logo.jpg";

const Navbar = () => {
  return (
    <nav className="w-full">
      <Link
        className="mx-auto"
        href="/">
        <Image
          src={logo}
          width={150}
          height={150}
          alt="aswer sécurité incendie logo"
        />
      </Link>
    </nav>
  );
};
export default Navbar;
