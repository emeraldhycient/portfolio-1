import { useState } from "react";
import Herosection from "../components/Herosection";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Tools from "../components/Tools";

export default function Home() {
  const [projects, setprojects] = useState([
    {
      image: "/assets/decor-full.png",
      title: "Interior decoration",
      description:
        "made this website to showcase what possible designs could be done nextjs and laravel ",
      github: "https://github.com/emeraldhycient/decor",
      url: "https://mpdesign.org",
      tools: ["react", "next js", "tailwind css", "laravel", "sanctum", "❤️"],
    },
    {
      image: "/assets/portfolioshort.png",
      title: "Portfolio Website",
      description:
        "i made this portfolio in one night, with the intention to use it to showcase my projects ",
      github: "https://github.com/emeraldhycient/portfolio-1",
      url: "https://igwezehycient.netlify.app",
      tools: ["react", "next js", "tailwind css", "❤️"],
    },
    {
      image: "/assets/musicplayer.jpeg",
      title: "Music player app",
      description:
        " a music player with all the basic features like audio list , a music player controls for next prev pause seek etc",
      github: "https://github.com/emeraldhycient/rald-player",
      url: "https://igwezehycient.netlify.app",
      tools: [
        "react",
        "react native",
        "react native paper",
        "expo media library",
        "❤️",
      ],
    },
    {
      image: "/assets/sportapp.jpeg",
      title: "fitness coach app",
      description:
        "Designed to be sleek and intuitive for sport coaches and fitness cautious individuals",
      github: "https://github.com/emeraldhycient/Gofitish",
      url: "https://igwezehycient.netlify.app",
      tools: [
        "react",
        "react native",
        "react native paper",
        "algora",
        "laravel",
        "❤️",
      ],
    },
    {
      image: "/assets/projectimg1.png",
      title: "Content  management tool",
      description:
        "a website dashboard for content management for coaches on the fitness app",
      github: "https://github.com/emeraldhycient/gofitish-creatores",
      url: "https://igwezehycient.netlify.app",
      tools: ["react", "next js", "tailwind css", "laravel", "❤️"],
    },
    {
      image: "/assets/taxiapp.png",
      title: "Ev station app",
      description:
        "Mobile app for displaying locations of ev stations nearest to you and the route to it",
      github: "https://github.com/emeraldhycient/chargeboost",
      url: "https://igwezehycient.netlify.app",
      tools: [
        "react",
        "react native",
        "react native paper",
        "google maps",
        "php",
        "❤️",
      ],
    },
    {
      image: "/assets/foodorder.png",
      title: "food ordering app",
      description:
        "search for your favourite meal and order from your favourite store and get it delivered to you",
      github: "https://github.com/emeraldhycient/dietonApp",
      url: "https://igwezehycient.netlify.app",
      tools: [
        "react",
        "react native",
        "react native paper",
        "google maps",
        "php",
        "❤️",
      ],
    },
  ]);
  return (
    <Layout title="Igweze Hycient">
      <Herosection />
      <div className="bg-slate-900">
        <Tools />
      </div>
      <section className="h-full w-full  md:w-9/12 ml-4 md:mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-wide leading-tight mt-20 mb-12 ">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((pro, i) => (
            <Project data={pro} key={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
