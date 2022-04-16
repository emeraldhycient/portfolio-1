import Head from "next/head";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <section className=" mt-8">
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content="igweze hycient portfolio website made with next js "
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/simple-icons-font@v5/font/simple-icons.min.css"
          type="text/css"
        />
      </Head>
      <Navbar />
      <main>{props.children}</main>
    </section>
  );
}

export default Layout;
