import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <nav className="bg-gray-900 text-gray-50 items-center flex flex-col lg:flex-row md:justify-end py-2 px-16 gap-4">
        <div className="flex flex-col-reverse lg:flex-row gap-1 lg:gap-6">
          <div className="flex gap-2 items-center">
            <IoMdMail size={25} />
            <a
              className="tracking-wider"
              href="mailto:prezyaswer13@gmail.com">
              prezyaswer13@gmail.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <MdLocalPhone
              className="mb-1"
              size={25}
            />
            <a
              className="tracking-wider"
              href="tel:+33619908273">
              06.19.90.82.73
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Contact;
