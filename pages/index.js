import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import ProjectsCarousel from "../components/ProjectsCarousel";
import Skills from "../components/Skills";
import alviLogo from "../public/alvi-logo.webp";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Alvi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
