import Banner from "@components/Banner";
import ServicesSection from "@components/ServicesSection";
import { Button } from "@components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-gray-100/90 py-16">
        <ServicesSection />
      </div>
    </>
  );
}
