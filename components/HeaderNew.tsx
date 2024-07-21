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
import Link from "next/link";

const HeaderNew = () => {
  return (
    <header
      id="accueil"
      className="min-h-screen mb-16 flex justify-center px-16 items-center bg-gray-100 shadow-lg shadow-gray-300 rounded-lg">
      {/* <Image
        alt="aswer hero"
        src={hero}
        width={360}
        height={360}
        className="fixed w-full h-full object-cover"
      /> */}

      <div className="h-full grid lg:grid-cols-2 gap-32">
        <div className="flex w-full flex-col text-gray-900 items-center justify-center ">
          <div>
            <Image
              src={logo}
              width={420}
              height={420}
              alt="aswer logo"
              className="pointer-events-none"
            />
          </div>
          <div className="text-center w-[75%] text-gray-700 ">
            <h1 className="pointer-events-none">Aswer Sécurité Incendie</h1>
            <h2 className="pointer-events-none">
              {"Service de sécurité incendie & d'aide aux personnes"}
            </h2>
            <div className=" flex flex-col items-center sm:flex-row font-bold sm:justify-center my-1 gap-2 text-red-800">
              <Button
                className="bg-red-700 hover:bg-red-600 transition-all mt-6 flex items-center gap-1 duration-300"
                asChild>
                <a href="tel:+33619908273">
                  <Phone size={15} /> 06.19.90.82.73
                </a>
              </Button>
              <div className="block lg:hidden lg:mb-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="hover:bg-blue-600 bg-blue-700 transition-all mt-6 duration-300">
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
        <div className="bg-gray-700/80 rounded-lg w-[90%] hidden h-auto shadow-lg shadow-gray-300 lg:block">
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
