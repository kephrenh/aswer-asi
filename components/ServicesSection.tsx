import { services } from "@lib/data";
import Image from "next/image";
import asiImg from "@public/assets/images/aswer-si-nobg.png";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full gap-5 flex flex-col items-center px-1 lg:px-16 shadow-md shadow-gray-300 rounded-lg pb-32">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={asiImg}
          alt="image sécurité incendie"
          width={300}
          height={300}
          className="rounded-full"
        />
        <h2 className="text-4xl">Nos services</h2>
      </div>
      <div className="grid xl:grid-cols-2 gap-8 px-8 md:px-0">
        <ServiceCard services={services} />
      </div>
    </section>
  );
};
export default ServicesSection;
