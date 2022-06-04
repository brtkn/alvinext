import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {
  faGem,
  faLightbulb,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faPencil,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tacking-widest uppercase text-[#5651e5]">
          Services
        </p>
        <p className="py-4">
          Here you can review the services we offer. We are always ready for new
          challenges.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FontAwesomeIcon icon={faGem} size="4x" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PERFECT DESIGN</h3>
              </div>
              <div className="col-span-3 font-light">
                <p className="text-sm">
                  Perfectly designed equipment exclusively configured for your
                  industrial lines.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FontAwesomeIcon icon={faPencil} size="4x" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>QUALITY CONTROL</h3>
              </div>
              <div className="col-span-3 font-light">
                <p className="text-sm">
                  Rigorous quality control, especially based on the occupational
                  safety of your workers.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FontAwesomeIcon icon={faThumbsUp} size="4x" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>LONG SERVICE LIFE</h3>
              </div>
              <div className="col-span-3 font-light">
                <p className="text-sm">
                  Guaranteed minimum two years of safe and trouble-free
                  operation.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FontAwesomeIcon icon={faUserDoctor} size="4x" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TECHNICAL SERVICE</h3>
              </div>
              <div className="col-span-3 font-light">
                <p className="text-sm">
                  On-site installation and technical service applicable to all
                  projects.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FontAwesomeIcon icon={faLightbulb} size="4x" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SOLUTION CENTER</h3>
              </div>
              <div className="col-span-3 font-light">
                <p className="text-sm">
                  Brand new and energy efficient ideas tailored to the details
                  of your projects.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FontAwesomeIcon icon={faGear} size="4x" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REFURBISHMENT</h3>
              </div>
              <div className="col-span-3 font-light">
                <p className="text-sm">
                  Maintenance, repair and refurbishment of your old equipment,
                  at our factory or on site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
