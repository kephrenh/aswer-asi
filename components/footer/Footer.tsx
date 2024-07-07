import logo from "@public/assets/images/aswer-logo.png";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b text-gray-800 from-red-50 to-red-300 flex flex-col justify-center w-full">
      <div className="mx-auto">
        <Image
          src={logo}
          width={300}
          height={300}
          alt="logo Aswer"
        />
      </div>
      <address className="mx-auto w-full flex flex-col">
        <h2 className="text-center pb-8">Coordonnées</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <section className="flex flex-col gap-2 mx-auto">
            <h3>Appelez-nous</h3>
            <div className="flex gap-2">
              <Phone size={30} />
              <div className="flex flex-col gap-1 font-bold">
                <a href="tel:+33651464424">+33.6.51.46.64.24</a>
                <a href="tel:+33619908273">+33.6.19.90.82.73</a>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-2 mx-auto">
            <h3>Siège Social</h3>
            <div className="flex gap-2">
              <MapPin size={30} />
              <div className="flex flex-col gap-1 font-bold">
                <span>36 rue Rochebrune</span>
                <span>93100 Montreuil</span>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-2 mx-auto">
            <h3>Ecrivez-nous</h3>
            <div className="flex gap-2">
              <Mail size={30} />
              <div className="flex flex-col gap-1 font-bold">
                <a href="mailto:prezyaswer13@gmail.com">prezyaswer13@gmail.com</a>
                <a href="mailto:prezy_awer@yahoo.fr">prezy_awer@yahoo.fr</a>
              </div>
            </div>
          </section>

          <ul className="flex flex-col gap-2 mx-auto">
            <li>
              <Link
                className="underline text-blue-800"
                href="/">
                <h3>Accueil</h3>
              </Link>
            </li>
            <li>
              <Link
                className="underline text-blue-800"
                href="/mentions-legales">
                <h3>Mentions légales</h3>
              </Link>
            </li>
          </ul>
        </div>
      </address>
      <p className="text-center pt-16 pb-4">
        Copyright ©️ 2024 - Tous droits réservés par Aswer Sécurité Incendie
      </p>
    </footer>
  );
};
export default Footer;
