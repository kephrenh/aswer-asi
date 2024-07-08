"use client";
import { Button } from "@components/ui/button";
import logo from "@public/assets/images/aswer-logo.png";
import { ArrowBigUp, Mail, MapPin, Phone } from "lucide-react";
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
    <footer className=" flex flex-col justify-center relative  z-50 text-gray-100 w-full">
      <div className="absolute w-full h-full backdrop-brightness-50 z-10"></div>

      <div className="mx-auto z-50">
        <Image
          className="z-10"
          src={logo}
          width={300}
          height={300}
          alt="logo Aswer"
        />
      </div>
      <address className="mx-auto w-full flex flex-col z-50">
        <h2 className="text-center pb-8">Nos coordonnées</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <section className="flex flex-col gap-2 mx-auto">
            <h3 className="text-center lg:text-start underline-offset-2 underline ">
              Appelez-nous
            </h3>
            <div className="flex gap-2">
              <Phone
                className="text-blue-800"
                size={30}
              />
              <div className="flex flex-col gap-1 font-bold">
                <a href="tel:+33651464424">+33.6.51.46.64.24</a>
                <a href="tel:+33619908273">+33.6.19.90.82.73</a>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-2 mx-auto">
            <h3 className="text-center underline-offset-2 underline lg:text-start">Siège Social</h3>
            <div className="flex gap-2">
              <MapPin
                className="text-blue-800"
                size={30}
              />
              <div className="flex flex-col gap-1 font-bold">
                <span>36 rue Rochebrune</span>
                <span>93100 Montreuil</span>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-2 mx-auto">
            <h3 className="text-center underline-offset-2 underline lg:text-start">Ecrivez-nous</h3>
            <div className="flex gap-2">
              <Mail
                className="text-blue-800"
                size={30}
              />
              <div className="flex flex-col gap-1 font-bold">
                <a href="mailto:prezyaswer13@gmail.com">prezyaswer13@gmail.com</a>
                <a href="mailto:prezy_awer@yahoo.fr">prezy_awer@yahoo.fr</a>
              </div>
            </div>
          </section>
        </div>
      </address>
      <div className="text-center pt-16 pb-4 z-50">
        <p>Copyright 2024 - Tous droits réservés par Aswer Sécurité Incendie</p>
        <p>ASI - {"Entreprise de sécurité incendie et d'aide aux personnes"}</p>
        <p>SIREN: 917 945 495</p>
        <ul className="flex justify-center gap-2">
          <li></li>
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
        </ul>
      </div>
      <div
        className={`fixed bottom-8 right-8 hover:bg-blue-700/85 rounded-full transition-all duration-300 z-50 p-2 bg-gray-900/85 text-gray-100 cursor-pointer ${
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
