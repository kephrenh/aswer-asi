import Image from "next/image";
import hero from "@public/assets/images/asi-hero5.jpg";
import logo from "@public/assets/images/aswer-logo.png";
import Form from "./Form";
import { Copy, Phone } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const HeaderNew = () => {
  return (
    <header
      id="accueil"
      className="h-screen w-screen relative flex justify-center items-center ">
      <div className="absolute top-0 left-0 right-0 w-full h-full backdrop-brightness-50 z-10"></div>
      <Image
        alt="aswer hero"
        src={hero}
        width={360}
        height={360}
        className="fixed w-full h-full object-cover"
      />

      <div className="absolute z-50 grid lg:grid-cols-2 gap-32">
        <div className="flex flex-col text-gray-900 items-center justify-center">
          <div>
            <Image
              src={logo}
              width={420}
              height={420}
              alt="aswer logo"
            />
          </div>
          <div className="text-center w-[75%] text-white ">
            <h1>Aswer Sécurité Incendie</h1>
            <h2>{"Service de sécurité incendie & d'aide aux personnes"}</h2>
            <div className=" flex font-bold justify-center my-1 gap-2 text-red-800">
              <Button
                className="bg-red-700 hover:bg-red-600 transition-all duration-300"
                asChild>
                <a href="tel:+33619908273">
                  <Phone size={15} /> <span className="ml-2">06.19.90.82.73</span>
                </a>
              </Button>
              <div className="block lg:hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="hover:bg-blue-600 bg-blue-700 transition-all duration-300">
                      Demander un devis
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Remplissez le formulaire</DialogTitle>
                      <DialogDescription>Tous les champs sont requis</DialogDescription>
                    </DialogHeader>
                    <Form />
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="destructive">
                          Fermer
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700/80 rounded-md w-[90%] hidden lg:block">
          <div className="w-full sm:w-[90%] mx-auto flex flex-col justify-center items-center">
            <h2 className="py-4 text-center text-gray-100">Devis / Contact</h2>
            <Form />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNew;
