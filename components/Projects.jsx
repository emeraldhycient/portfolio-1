import Image from "next/image";
import React from "react";

function Projects({ image, ttitle, github, url }) {
  return (
    <section className="h-96 w-full bg-slate-700">
      <Image src={image} className="h-56 w-full" />
    </section>
  );
}

export default Projects;
