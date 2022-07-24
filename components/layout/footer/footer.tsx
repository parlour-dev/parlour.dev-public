import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { Icon } from "../../util/icon";

import {
  IoBriefcase,
  IoCall,
  IoMail,
  IoPhonePortrait,
  IoPhonePortraitOutline,
} from "react-icons/io5";

export const Footer = ({ data, icon, rawData }) => {
  return (
    <footer
      className={`bg-gradient-to-br w-full bg-parlourDark text-white drop-shadow-xl min-h-96 `}
    >
      <Container
        className="w-full pt-10 flex flex-col justify-center items-center"
        size="small"
      >
        <div className="w-full flex flex-col justify-start items-start">
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">
            Direct <b>contact</b>
          </p>
          <span className="mt-6 text-lg flex flex-row justify-center items-center gap-4">
            <IoMail />
            <p>contact@parlour.dev</p>
          </span>
          <span className="mt-6 mb-12 text-lg flex flex-row justify-center items-center gap-4">
            <IoPhonePortrait />
            <p>+48 511 610 544</p>
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-t-10 gap-x-[10rem] justify-center items-start">
          <div className="text-md mx-auto md:mx-0">
            <img
              className="w-64"
              src="/parlour-dev.webp"
              alt="Parlour Development Logo"
            />
            <div className="mt-2 flex flex-row items-center">
              <IoMail />
              <p className="ml-2">contact@parlour.dev</p>
            </div>
            <div className="mt-2 flex flex-row items-center">
              <IoBriefcase />
              <p className="ml-2">Parlour Development LLC</p>
            </div>
            <p className="ml-8 mb-2 text-left">
              Warszawska 40/2A, <br /> 40-008 Katowice
            </p>
            <Link href="/privacy">
              <a target="_blank" className="ml-8">
                Privacy Policy
              </a>
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">
              ABOUT
            </p>
            <ul className="text-md">
              <li className="mt-2">About us</li>
              <li className="mt-2">Team</li>
              <li className="mt-2">Beginning</li>
              <li className="mt-2">Newsroom</li>
              <li className="mt-2">Careers</li>
              <li className="mt-2">Philosophy</li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">
              SERVICES
            </p>
            <ul className="text-md">
              <li className="mt-2">NFT collections</li>
              <li className="mt-2">Tokenization</li>
              <li className="mt-2">Smart contract audits</li>
              <li className="mt-2">dApp development</li>
              <li className="mt-2">DeFi apps</li>
              <li className="mt-2"></li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">
              HAPPY CLIENT STORIES
            </p>
            <p className="text-md mt-2">Coming soon... :)</p>
          </div>
        </div>

        <hr className="w-full h-[3px] border-0 rounded-full mt-10 mb-4 bg-gradient-to-r from-parlourGreen to-parlourBlue" />
        <p className="text-center">
          Made with 💚 by Parlour <br /> ⓒ 2022
        </p>
      </Container>
    </footer>
  );
};
