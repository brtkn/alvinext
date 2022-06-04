import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import {
  faHandsHelping,
  faHeadset,
  faLocationDot,
  faPencil,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="/"
                />
              </div>
              <div className="flex justify-start items-center  py-3">
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                <p className="font-bold pl-3">Where to reach us ?</p>
              </div>
              <p className="text-sm font-light">
                You can reach us at the following address: <br />
                <span className="font-bold">
                  34724, Kadikoy, Istanbul, TURKIYE
                </span>
              </p>
              <div className="flex justify-start items-center  py-3">
                <FontAwesomeIcon icon={faPencil} size="2x" />
                <p className="font-bold pl-3">Email us</p>
              </div>
              <p className="text-sm">
                Email your issues and suggestion and the following email
                addresses:
                <a
                  className="font-bold"
                  href="http://alvi.llc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  alvi@alvi.llc
                </a>
              </p>
              <div className="flex justify-start items-center  py-3">
                <FontAwesomeIcon icon={faPhoneSquare} size="2x" />
                <a className="font-bold pl-3">Want to call us?</a>
              </div>
              <p className="text-sm">
                From Monday to Friday, 10:00 – 18:00, call us at:
                <br />
                <span className="font-bold pl-3">+90 532 2654960</span>
              </p>
              <div className="flex justify-start items-center  py-3">
                <FontAwesomeIcon icon={faHeadset} size="2x" />
                <p className="font-bold pl-3">Best support</p>
              </div>
              <p className="text-sm">
                We take your issues seriously. For every question you ask we
                will provide an answer.
              </p>
              <div>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
