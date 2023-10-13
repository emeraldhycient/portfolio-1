import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import Image from "next/image";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

function Herosection() {
  return (
    <section className="h-full  w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-20 md:mt-12 items-center">
        <div className="">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-wide leading-tight mt-6 md:mt-0 mb-6 md:mb-0">
            Software,Mobile app Engineer And Tech Enthusiast.
          </h1>
          <Typed
            strings={[
              " Hi, I am Igweze Hycient and i am Technology Agnostic, ",
              "I learn whatever is needed to get the job done ✅ ",
              "And I am a passionate developer.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          >
            <h1 className="text-slate-900 text-lg mt-3"></h1>
          </Typed>

          <div className="text-right flex items-center mt-4">
            <a
              href="https://github.com/emeraldhycient"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 text-lg mx-2"
            >
              <BsGithub size={25} />
            </a>
            <a
              href="https://wa.me/+2347088639675"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 text-lg mx-2"
            >
              <IoLogoWhatsapp size={25} className="text-green-500" />
            </a>
            <a
              href="https://twitter.com/emeraldhycient"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 text-lg mx-2"
            >
              <BsTwitter size={25} className="text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/igweze-hycient-411115235/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 text-lg mx-2"
            >
              <AiFillLinkedin size={25} className="text-blue-600" />
            </a>
            <a
              href="mailto:igwezehycient86@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 text-lg mx-2 "
            >
              <MdMarkEmailUnread size={25} className="text-red-500" />
            </a>
          </div>
        </div>
        <div className=" mt-10 md:mt-0">
          <Image
            src="/assets/marginalia-programming.gif"
            width={700}
            height={500}
            unoptimized={true}
            className="rounded-full -z-50"
            alt="marginalia-programming gif"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
