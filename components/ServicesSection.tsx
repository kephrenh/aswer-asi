import { services } from "@lib/data";
import Image from "next/image";
import asiImg from "@public/assets/images/aswer-si-nobg.png";

const ServicesSection = () => {
  return (
    <section className="w-full gap-5 flex flex-col items-center px-16 lg:px-0 shadow-md shadow-gray-300 rounded-lg pb-32">
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
      <div className="grid gap-8 px-8 md:px-0">
        {services.map((service) => (
          <article
            key={service.id}
            className="flex group flex-col justify-center h-auto items-center gap-4 relative rounded-lg bg-gray-200">
            <div className="absolute w-full h-full">
              <Image
                src={service.image}
                alt="image sécurité incendie"
                fill
                className="object-cover brightness-50 rounded-xl duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center text-white group-hover:scale-105 duration-300 z-50 w-[50%]">
              <h3 className="text-center pt-5 text-2xl pb-4">{service.name}</h3>
              <p className="px-5 pb-5">{service.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;
