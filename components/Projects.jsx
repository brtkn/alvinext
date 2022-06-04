import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img1 from "../public/assets/projects/circle.jpg";
import Img2 from "../public/assets/projects/rectangle.jpg";
import Img3 from "../public/assets/projects/clipspackage.jpg";
import Img4 from "../public/assets/projects/ufopacket.jpg";
import ProjecItem from "./ProjecItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What We've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjecItem
            title="Project 1"
            backgroundImg={Img1}
            projectUrl="/project1"
            height="250"
            width="250"
          />
          <ProjecItem
            title="Project 2"
            backgroundImg={Img2}
            projectUrl="/project2"
          />
          <ProjecItem
            title="Project 3"
            backgroundImg={Img3}
            projectUrl="/project3"
          />
          <ProjecItem
            title="Project 4"
            backgroundImg={Img4}
            projectUrl="/project4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
