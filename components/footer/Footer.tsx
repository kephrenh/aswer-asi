"use client";
import { Button } from "@components/ui/button";
import logo from "@public/assets/images/aswer-logo.png";
import { ArrowBigUp, Copyright, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [arrow, setArrow] = useState(false);
  useEffect(() => {
    const handleArrow = () => {
      if (window.scrollY >= 180) {
        setArrow(true);
      } else {
        setArrow(false);
      }
    };
    window.addEventListener("scroll", handleArrow);
  }, []);

  return (
    <footer className=" flex flex-col justify-center relative bg-gray-900/80 z-50 text-gray-50 w-full">
      <h2 className="text-center tracking-widest z-50 mt-4 mb-8 md:mb-1">Contactez-nous</h2>
      <div className="absolute w-full h-full backdrop-brightness-50 z-10"></div>
      <div className="z-50 flex flex-col pb-8 md:pt-8 lg:pt-0 justify-center md:flex-row md:items-center">
        <div className="mx-auto">
          <Image
            className="z-10"
            src={logo}
            width={300}
            height={300}
            alt="logo Aswer"
          />
        </div>
        <address className="mx-auto w-full flex flex-col z-50">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <section className="flex flex-col gap-2 mx-auto">
              <h3 className="text-center lg:text-start underline-offset-2 underline tracking-widest">
                Appelez-nous
              </h3>
              <div className="flex gap-2">
                <Phone
                  className="text-blue-800"
                  size={30}
                />
                <div className="flex flex-col gap-1 text-sm tracking-wider">
                  <a href="tel:+33651464424">+33.6.51.46.64.24</a>
                  <a href="tel:+33619908273">+33.6.19.90.82.73</a>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-2 mx-auto">
              <h3 className="text-center underline-offset-2 underline lg:text-start tracking-widest">
                Siège Social
              </h3>
              <div className="flex gap-2">
                <MapPin
                  className="text-blue-800"
                  size={30}
                />
                <div className="flex flex-col gap-1 text-sm tracking-wider">
                  <span>56 rue Rochebrune</span>
                  <span>93100 Montreuil</span>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-2 mx-auto">
              <h3 className="text-center underline-offset-2 underline lg:text-start tracking-widest">
                Ecrivez-nous
              </h3>
              <div className="flex gap-2">
                <Mail
                  className="text-blue-800"
                  size={30}
                />
                <div className="flex flex-col gap-1 text-sm tracking-wider">
                  <a href="mailto:prezyaswer13@gmail.com">prezyaswer13@gmail.com</a>
                  <a href="mailto:prezy_awer@yahoo.fr">prezy_awer@yahoo.fr</a>
                </div>
              </div>
            </section>
          </div>
        </address>
      </div>

      <div className="text-center text-sm py-4 bg-gray-100 text-gray-800 z-50">
        <p>Copyright © 2024 - Tous droits réservés par Aswer Sécurité Incendie</p>
        <p>SIREN: 917 945 495</p>
        {/* <ul className="flex justify-center gap-2">
          <li>
            <Link
              className="underline"
              href="/politique-de-confidentalite">
              <h3>Politique de confidentialité</h3>
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              href="/mentions-legales">
              <h3>Mentions légales</h3>
            </Link>
          </li>
        </ul> */}
      </div>
      <div
        className={`fixed bottom-8 right-8 hover:bg-blue-700/85 rounded-full transition-all duration-300 z-50 p-2 bg-blue-900/85 text-gray-100 cursor-pointer ${
          arrow ? "opacity-100" : "opacity-0 translate-y-10"
        }`}>
        <a href="#accueil">
          <ArrowBigUp />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
