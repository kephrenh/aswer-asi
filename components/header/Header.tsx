import Form from "@components/Form";
import logo from "@public/assets/images/aswer-logo.png";
import Image from "next/image";
import Contact from "../Contact";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <Contact />

      <h1 className=" font-bold text-gray-800 text-center pt-8">
        Sécurité Incendie sur Paris et en Île-de-France{" "}
      </h1>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center w-full py-16 lg:py-0">
        <div className="sm:w-[40%]">
          <Image
            src={logo}
            width={800}
            height={800}
            alt="aswer sécurité incendie logo"
          />
        </div>
        {/* <div className=" flex flex-col flex-1 justify-center items-center">
          <h1 className=" font-bold text-gray-800">
            Sécurité Incendie sur Paris et en Île-de-France{" "}
          </h1>
          </div> */}
        <div className="sm:w-[60%]">
          <Form />
        </div>
      </div>
    </header>
  );
};
export default Header;
