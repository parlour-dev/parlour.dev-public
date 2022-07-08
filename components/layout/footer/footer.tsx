import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { Icon } from "../../util/icon";

export const Footer = ({ data, icon, rawData }) => {
  return (
    <footer
      className={`bg-gradient-to-br w-full bg-parlourDark text-white drop-shadow-xl min-h-96 `}
    >
      <Container
        className="w-full pt-10 flex flex-col justify-center items-center"
        size="small"
      >
        <div className="flex flex-col md:flex-row gap-t-10 gap-x-[10rem] justify-center items-center md:items-start">
          <div className="mx-auto md:mx-0">
            <img
              className="w-64"
              src="/parlour-dev.webp"
              alt="Parlour Development Logo"
            />
            <div className="mt-2 flex flex-row items-center">
              <Icon
                className="w-[24px] scale-150 aspect-1 p-0 m-0"
                data={{
                  name: "mail",
                }}
              />
              <p className="ml-2 text-sm">contact@parlour.dev</p>
            </div>
            <div className="mt-2 flex flex-row items-center">
              <Icon
                className="w-[24px] scale-150 aspect-1"
                data={{
                  name: "office",
                }}
              />
              <p className="ml-2 text-sm">Parlour Development LLC</p>
            </div>
            <p className="ml-8 mb-2 text-sm text-left">
              Warszawska 40/2A, <br /> 40-008 Katowice
            </p>
            <Link href="/privacy">
              <a target="_blank" className="ml-8">
                Privacy Policy
              </a>
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">
              SERVICES
            </p>
            <ul>
              <li>NFT collections</li>
              <li>Tokenization</li>
              <li>Smart contract audits</li>
              <li>dApp development</li>
              <li>DeFi apps</li>
              <li></li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-parlourGreen to-parlourBlue">
              HAPPY CLIENT STORIES
            </p>
            <p>Coming soon... :)</p>
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
