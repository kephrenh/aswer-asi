import Image from "next/image";
import hero from "@public/assets/images/asi-hero2.webp";
import logo from "@public/assets/images/aswer-logo.png";
import Form from "./Form";

const HeaderNew = () => {
  return (
    <header className="h-screen w-screen relative flex justify-center items-center ">
      <Image
        alt="aswer hero"
        src={hero}
        width={360}
        height={360}
        className="absolute w-full h-full"
      />

      <div className="absolute z-50 grid lg:grid-cols-2 px-8">
        <div className="flex flex-col text-gray-100 items-center justify-center">
          <div>
            <Image src={logo} width={480} height={480} alt="aswer logo" />
          </div>
          <div className="text-center w-[75%]">
            <h1>Aswer Sécurité Incendie</h1>
            <h2>{"Service de sécurité incendie & d'aide aux personnes"}</h2>
          </div>
        </div>
        <div className="bg-gray-700/80 rounded-md w-[90%] hidden lg:block">
          <Form />
        </div>
      </div>
    </header>
  );
};

export default HeaderNew;
