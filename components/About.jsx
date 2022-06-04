import Image from "next/image";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import projectImg from "../public/assets/alvi/circle.jpg";
import projectImg2 from "../public/assets/alvi/circledown.jpg";
import projectImg3 from "../public/assets/alvi/circleclose.jpg";
import projectImg4 from "../public/assets/alvi/rectangle.jpg";
import projectImg5 from "../public/assets/alvi/rectangleclose.jpg";
import projectImg6 from "../public/assets/alvi/ufo.jpg";
import projectImg7 from "../public/assets/alvi/ufopacket.jpg";
import projectImg8 from "../public/assets/alvi/clips.jpg";
import projectImg9 from "../public/assets/alvi/clipspackage.jpg";
import projectImg10 from "../public/assets/alvi/rect.jpg";
import projectImg11 from "../public/assets/alvi/recbottom.jpg";
import projectImg12 from "../public/assets/alvi/recpackage.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 mb-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-3">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who we are</h2>
          <p className="p-2 text-gray-600">
            Our team consists of a group of creative, hardworking and reliable
            individuals who are experts in their fields. Our colleagues, who are
            competent in design, production, logistics and international trade,
            complete each project meticulously.
          </p>
          <h2 className="py-4">Our Philosophy</h2>
          <p className="p-2 text-gray-600">
            Our approach to business is very simple. Finalizing projects on time
            and at less cost than anyone else. We carefully finalize the
            projects we undertake by planning them down to the smallest detail.
            This is the simplest and shortest way to become a reliable supplier.
          </p>
          <h2 className="py-4">What we do</h2>

          <p className="p-2 text-gray-600">
            In brief, we design customized metalwork projects. The equipment we
            produce for industries such as construction, food, transportation
            and agriculture promises efficiency and long service life thanks to
            the solutions we offer at the early project stage.
          </p>
        </div>
        {/*  <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/1653464182803.jpg"
            alt=""
            width="350"
            height="350"
          />
        </div> */}
        <div className="col-span-3 py-1 ">
          <div className="w-[80%]  m-auto">
            <Carousel showThumbs={false}>
              <div>
                <Image
                  src={projectImg}
                  alt="image1"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 1</p>
              </div>
              <div>
                <Image
                  src={projectImg2}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 2</p>
              </div>
              <div>
                <Image
                  src={projectImg3}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 3</p>
              </div>
              <div>
                <Image
                  src={projectImg4}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 4</p>
              </div>
              <div>
                <Image
                  src={projectImg5}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 5</p>
              </div>
              <div>
                <Image
                  src={projectImg6}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 6</p>
              </div>
              <div>
                <Image
                  src={projectImg7}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 7</p>
              </div>
              <div>
                <Image
                  src={projectImg8}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 8</p>
              </div>
              <div>
                <Image
                  src={projectImg9}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 9</p>
              </div>
              <div>
                <Image
                  src={projectImg10}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 10</p>
              </div>
              <div>
                <Image
                  src={projectImg11}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 11</p>
              </div>
              <div>
                <Image
                  src={projectImg12}
                  alt="image2"
                  objectFit="cover"
                  width="1000"
                  height="500"
                  showThumbs={false}
                />
                <p className="legend">Image 12</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
