import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function Project({ data }) {
  const { image, title, description, url, github, tools } = data;

  return (
    <section className="bg-slate-900 rounded-lg pb-2">
      <div
        style={{
          height: 400,
          width: "100%",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center top",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-lg"
      ></div>
      <div className="flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl font-semibold text-white tracking-wide leading-tight mt-2 mb-6 ">
          {title}
        </h1>
        <p className="text-gray-50 text-center">{description}</p>
        <div className="grid grid-cols-4 gap-4 my-3 mt-6">
          {tools.map((tool, i) => (
            <div className="bg-slate-700 rounded-lg text-center p-2" key={i}>
              <h1 className="text-sm font-semibold text-white">{tool}</h1>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center w-full mt-6">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-900 text-lg mx-2"
          >
            <BsGithub size={25} className="text-white" />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-900 text-lg mx-2"
          >
            <BiLinkExternal size={25} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
