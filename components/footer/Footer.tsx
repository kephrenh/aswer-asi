import logo from "@public/assets/images/aswer-logo.png";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-gray-700 flex flex-col justify-center w-full">
      <div className="mx-auto">
        <Image
          className="z-10"
          src={logo}
          width={300}
          height={300}
          alt="logo Aswer"
        />
      </div>
      <address className="mx-auto w-full flex flex-col">
        <h2 className="text-center pb-8">Nos coordonnées</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <section className="flex flex-col gap-2 mx-auto">
            <h3 className="text-center lg:text-start underline-offset-2 underline ">
              Appelez-nous
            </h3>
            <div className="flex gap-2">
              <Phone size={30} />
              <div className="flex flex-col gap-1 font-bold">
                <a href="tel:+33651464424">+33.6.51.46.64.24</a>
                <a href="tel:+33619908273">+33.6.19.90.82.73</a>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-2 mx-auto">
            <h3 className="text-center underline-offset-2 underline lg:text-start">
              Siège Social
            </h3>
            <div className="flex gap-2">
              <MapPin size={30} />
              <div className="flex flex-col gap-1 font-bold">
                <span>36 rue Rochebrune</span>
                <span>93100 Montreuil</span>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-2 mx-auto">
            <h3 className="text-center underline-offset-2 underline lg:text-start">
              Ecrivez-nous
            </h3>
            <div className="flex gap-2">
              <Mail size={30} />
              <div className="flex flex-col gap-1 font-bold">
                <a href="mailto:prezyaswer13@gmail.com">
                  prezyaswer13@gmail.com
                </a>
                <a href="mailto:prezy_awer@yahoo.fr">prezy_awer@yahoo.fr</a>
              </div>
            </div>
          </section>

          <ul className="flex flex-col gap-1 mx-auto text-center lg:text-start">
            <li>
              <Link className="underline text-blue-700" href="/">
                <h3>Accueil</h3>
              </Link>
            </li>
            <li>
              <Link
                className="underline text-blue-700"
                href="/mentions-legales"
              >
                <h3>Mentions légales</h3>
              </Link>
            </li>
          </ul>
        </div>
      </address>
      <div className="text-center pt-16 pb-4">
        <p>Copyright 2024 - Tous droits réservés par Aswer Sécurité Incendie</p>
        <p>SIREN: 917 945 495</p>
      </div>
    </footer>
  );
};
export default Footer;
