import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            This is <span className="text-[#5651e5]">Alvi</span>
          </h1>
          <h1 className="py-2 text-gray-700">METAL WORKS</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            We are based in Istanbul, Turkey and offering customized solutions
            to our customers from various industries since 2011.
          </p>
          <div className="flex items-center justify-between max-w-[200px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="#contact">
                <a>
                  <AiOutlineMail />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
