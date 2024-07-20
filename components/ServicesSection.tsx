import { services } from "@lib/data";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="w-full gap-5 flex flex-col items-center">
      <h2>Nos services</h2>
      <div className="grid gap-8">
        {services.map((service) => (
          <article
            // style={{
            //   backgroundImage: `url(${service.image})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   filter: "brightness(50%)",
            // }}
            key={service.id}
            className="flex group flex-col h-auto items-center gap-4 relative rounded-lg bg-gray-200">
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
