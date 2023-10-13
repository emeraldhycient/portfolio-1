import { useState } from "react";
import Herosection from "../components/Herosection";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Tools from "../components/Tools";

export default function Home() {
  const [projects, setprojects] = useState([
    {
      image: "/assets/cloudp2p-b.png",
      title: "Cloudp2p web app and brand website",
      description:
        "Played a pivotal role in developing and managing the brand website for Cloudp2p, an innovative crypto peer-to-peer exchange with a robust escrow system. This platform facilitates secure cryptocurrency exchanges between parties, simplifying transactions and reducing inherent risks. My contributions underscore the platform's dedication to both user experience and enhanced security, making it a vital player in the crypto trading landscape",
      github: "https://github.com/emeraldhycient",
      url: "https://play.google.com/store/apps/details?id=io.cloudp2p",
      tools: [
        "react",
        "Next js",
        "tailwind css",
        "Material Ui",
        "Zustand",
        "Redux",
        "❤️",
      ],
    },
    {
      image: "/assets/cloudp2p.png",
      title: "Cloudp2p",
      description:
        "Lead, designed and developed a crypto peer to peer exchange mobile app for Cloudax Holdings Ltd",
      github: "https://github.com/emeraldhycient",
      url: "https://play.google.com/store/apps/details?id=io.cloudp2p",
      tools: [
        "react",
        "react native",
        'expo',
        "tailwind css",
        "react-native-paper",
        "Zustand",
        "❤️",
      ],
    },
    {
      image: "/assets/vision-saving-agent.jpg",
      title: "Vision savings agent app",
      description:
        "soley designed, built and managed the agent part of the agency app for vision savings ng",
      github: "https://github.com/emeraldhycient",
      url: "https://play.google.com/store/apps/details?id=ng.visionsavings",
      tools: [
        "react",
        "react native",
        "expo",
        "tailwind css",
        "react-native-paper",
        "❤️",
      ],
    },
    {
      image: "/assets/vision_savings.jpg",
      title: "Vision savings customer app",
      description:
        "Worked in Collaboration with chigozie to pull off the customer agency app for vision savings ng",
      github: "https://github.com/emeraldhycient",
      url: "https://play.google.com/store/apps/details?id=ng.visionsavings.user",
      tools: [
        "react",
        "react native",
        "tailwind css",
        "expo",
        "react-native-paper",
        "❤️",
      ],
    },
    {
      image: "/assets/kellispay.webp",
      title: "kellispay",
      description:
        "Worked in Collaboration with two members of the team to pull off the payment infrastructure",
      github: "https://github.com/emeraldhycient",
      url: "https://play.google.com/store/apps/details?id=com.ijele.kellispay",
      tools: [
        "react",
        "react native",
        "expo",
        "tailwind css",
        "redux",
        "react-native-paper",
        "❤️",
      ],
    },
    {
      image: "/assets/tranxnow.webp",
      title: "Tranxnow",
      description:
        "Worked in Collaboration with two members of the team to pull off the payment infrastructure",
      github: "https://github.com/emeraldhycient",
      url: "https://play.google.com/store/search?q=tranxnow&c=apps",
      tools: [
        "react",
        "react native",
        "expo",
        "tailwind css",
        "redux",
        "react-native-paper",
        "❤️",
      ],
    },
    {
      image: "/assets/pluralcode.png",
      title: "Pluralcode Academy",
      description:
        "builds and maintains pluralcode academy website that converts over 1k student monthly",
      github: "https://github.com/emeraldhycient",
      url: "https://pluralcode.institute/",
      tools: [
        "react",
        "tailwind css",
        "axios",
        "❤️",
      ],
    },
    {
      image: "/assets/pluralcode_dashboard.png",
      title: "Pluralcode Academy lms",
      description:
        "built and maintains pluralcode academy LMS that supports all enrolled students and mentors",
      github: "https://github.com/emeraldhycient",
      url: "https://student.pluralcode.institute/login",
      tools: [
        "react",
        "tailwind css",
        "axios",
        "❤️",
      ],
    },
    {
      image: "/assets/todo.jpg",
      title: "Generic todo app",
      description:
        "very simple generic todo app made in react native , create,edit,update,delete",
      github: "https://github.com/emeraldhycient/stashbox-front",
      url: "https://appsenjoy.com/hGpy7",
      tools: [
        "react",
        "react native",
        "tailwind css",
        "node js",
        "express",
        "jest",
        "mongoose",
        "mongodb",
        "❤️",
      ],
    },

    {
      image: "/assets/myhospital.PNG",
      title: "Hospital booking app",
      description:
        "simple mobile app to book Hospital visit ahead of time,actually app screenshot seen above",
      github: "https://github.com/emeraldhycient/myhospital",
      url: "https://appsenjoy.com/Q6fAo",
      tools: [
        "react",
        "react native",
        "tailwind css",
        "node js",
        "express",
        "react-native-maps",
        "mongoose",
        "mongodb",
        "❤️",
      ],
    },
    {
      image: "/assets/decor-full.png",
      title: "Interior decoration",
      description:
        "made this website to showcase what possible designs could be done nextjs and laravel ",
      github: "https://github.com/emeraldhycient/decor",
      url: "https://mp-design-3y4464.netlify.app/",
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
    // {
    //   image: "/assets/musicplayer.jpeg",
    //   title: "Music player app",
    //   description:
    //     " a music player with all the basic features like audio list , a music player controls for next prev pause seek etc",
    //   github: "https://github.com/emeraldhycient/rald-player",
    //   url: "https://igwezehycient.netlify.app",
    //   tools: [
    //     "react",
    //     "react native",
    //     "react native paper",
    //     "expo media library",
    //     "❤️",
    //   ],
    // },
    // {
    //   image: "/assets/sportapp.jpeg",
    //   title: "fitness coach app",
    //   description:
    //     "Designed to be sleek and intuitive for sport coaches and fitness cautious individuals",
    //   github: "https://github.com/emeraldhycient/Gofitish",
    //   url: "https://igwezehycient.netlify.app",
    //   tools: [
    //     "react",
    //     "react native",
    //     "react native paper",
    //     "algora",
    //     "laravel",
    //     "❤️",
    //   ],
    // },

    // {
    //   image: "/assets/taxiapp.png",
    //   title: "Ev station app",
    //   description:
    //     "Mobile app for displaying locations of ev stations nearest to you and the route to it",
    //   github: "https://github.com/emeraldhycient/chargeboost",
    //   url: "https://igwezehycient.netlify.app",
    //   tools: [
    //     "react",
    //     "react native",
    //     "react native paper",
    //     "google maps",
    //     "php",
    //     "❤️",
    //   ],
    // },
    // {
    //   image: "/assets/foodorder.png",
    //   title: "food ordering app",
    //   description:
    //     "search for your favourite meal and order from your favourite store and get it delivered to you",
    //   github: "https://github.com/emeraldhycient/dietonApp",
    //   url: "https://igwezehycient.netlify.app",
    //   tools: [
    //     "react",
    //     "react native",
    //     "react native paper",
    //     "google maps",
    //     "php",
    //     "❤️",
    //   ],
    // },
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
