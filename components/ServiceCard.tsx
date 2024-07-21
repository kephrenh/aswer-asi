type Service = {
  id: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
};

const ServiceCard = ({ services }: { services: Service[] }) => {
  return services.map((service: Service) => (
    <article
      key={service.id}
      className="flex flex-col justify-center h-auto items-center hover:shadow-gray-600 duration-300 gap-4 rounded-xl shadow-lg shadow-gray-300 bg-gray-200">
      <div className="w-full h-full">
        <div className="w-full h-[18.75rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt="image sécurité incendie"
            className="object-center lg:object-cover w-full h-full rounded-t-xl"
          />
        </div>
      </div>
      <div className="text-center text-gray-900">
        <h3 className="text-center pt-5 text-2xl pb-4">{service.name}</h3>
        <p className="px-5 pb-5">{service.desc}</p>
      </div>
    </article>
  ));
};
export default ServiceCard;
