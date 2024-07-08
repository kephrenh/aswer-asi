import { menuLinks } from "@lib/data";
import Image from "next/image";
import logo from "@public/assets/images/aswer-logo.png";

const NavbarNew = () => {
  return (
    <nav>
      <div>
        <Image src={logo} alt="aswer logo" width={150} height={150} />
      </div>
      <ul>
        {menuLinks.map((link) => (
          <li key={link.text}>
            <a href={link.path}>{link.text}</a>
          </li>
        ))}
      </ul>
      <div>
      </div>
    </nav>
  );
};

export default NavbarNew;
