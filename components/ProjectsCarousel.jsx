import React from "react";
import { Carousel } from "react-responsive-carousel";
import carouselImg from "../public/assets/projects/circle.jpg";
import Image from "next/image";

const ProjectsCarousel = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
        <Carousel>
          <div>
            <Image src={carouselImg} alt="image1" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <Image src={carouselImg} alt="image2" />
            <p className="legend">Image 2</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
