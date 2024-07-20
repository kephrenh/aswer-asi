import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 py-8 pl-8 sm:py-0 sm:pl-0  h-auto sm:flex w-full items-center gap-4 bg-gray-900 text-gray-100 font-semibold sm:h-16 justify-end sm:pr-36">
      <div className="flex gap-1 items-center">
        <IoMdMail size={25} />
        <a
          className="tracking-wider"
          href="mailto:prezyaswer13@gmail.com">
          prezyaswer13@gmail.com
        </a>
      </div>
      <div className="hidden sm:block">|</div>
      <div className="flex gap-1 items-center">
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
  );
};
export default Contact;
