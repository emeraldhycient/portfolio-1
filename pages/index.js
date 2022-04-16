import Herosection from "../components/Herosection";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <Layout title="Igweze Hycient">
      <Herosection />
      <Tools />
      <section className="h-full  w-11/12 mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-wide leading-tight mt-20 mb-12 ">
            Projects
          </h1>
        </div>
        <Project />
      </section>
    </Layout>
  );
}
