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
    <footer
      id="contact"
      className=" flex flex-col justify-center bg-gray-100 text-gray-900 w-full"
    >
      <h2 className="text-center tracking-widest z-50 mt-4 mb-8 md:mb-1">
        Contactez-nous
      </h2>
      <div className="pb-16 px-16">
        <address className="mx-auto w-full grid justify-center lg:flex lg:items-center shadow-lg pb-8 shadow-gray-300 rounded-lg ">
          <Image
            className="z-10"
            src={logo}
            width={300}
            height={300}
            alt="logo Aswer"
          />
          <div className="grid w-full gap-6 lg:grid-cols-3 justify-center">
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2 w-full justify-start">
                <Phone className="text-blue-800" size={20} />
                <h3 className="lg:text-start underline-offset-2 underline tracking-widest">
                  Appelez-nous
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 text-sm items-center tracking-wider">
                  <a href="tel:+33651464424">+33.6.51.46.64.24</a>
                  <a href="tel:+33619908273">+33.6.19.90.82.73</a>
                  <a href="tel:+33652801556">+33.6.52.80.15.56</a>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-blue-800" size={20} />
                <h3 className="underline-offset-2 underline lg:text-start tracking-widest">
                  Siège Social
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 items-center text-sm tracking-wider">
                  <span>56 rue Rochebrune</span>
                  <span>93100 Montreuil</span>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="text-blue-800" size={20} />{" "}
                <h3 className="underline-offset-2 underline lg:text-start tracking-widest">
                  Ecrivez-nous
                </h3>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 items-center text-sm tracking-wider">
                  <a href="mailto:prezyaswer13@gmail.com">
                    prezyaswer13@gmail.com
                  </a>
                  <a href="mailto:prezy_awer@yahoo.fr">prezy_awer@yahoo.fr</a>
                  <a href="mailto:melaynecmr@gmail.com">melaynecmr@gmail.com</a>
                </div>
              </div>
            </section>
          </div>
        </address>
      </div>

      <div className="text-center text-sm py-4 text-gray-50 bg-gray-900 z-50">
        <p>
          Copyright © 2024 - Tous droits réservés par Aswer Sécurité Incendie
        </p>
        <p>SIREN: 917 945 495</p>
      </div>
      <div
        className={`fixed bottom-8 right-8 hover:bg-blue-700/85 rounded-full transition-all duration-300 z-50 p-2 bg-blue-900/85 text-gray-100 cursor-pointer ${
          arrow ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <a href="#accueil">
          <ArrowBigUp />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
