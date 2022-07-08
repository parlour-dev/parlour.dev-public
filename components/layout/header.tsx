import React from "react";
import Link from "next/link";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import useMediaQuery from "../../hooks/useMediaQuery";
import { stack as Menu } from "react-burger-menu";
import { BsArrowRight } from "react-icons/bs";
import ParlourLogo from "../../public/parlour-dev-white.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import ReactGA from "react-ga4";

export const Header = ({ data }) => {
  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const [scrollLevel, setScrollLevel] = React.useState<string>("index");

  React.useEffect(() => {
    setUrl(hasUrl);
  }, [hasUrl]);

  React.useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });

  // Add a listener to the Navbar component to change its opacity on scroll down
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrollLevel("opacity-80 ");
      } else {
        setScrollLevel("");
      }
    });
  }, []);

  // useMediaQuery to determine whether someone is browing on mobile or desktop
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <nav
      className={`fixed hover:opacity-100 backdrop-blur-md hover:shadow-lg lg:rounded-b-3xl top-0 left-0 right-0 z-50 bg-white ${
        isDesktop && scrollLevel
      } duration-300`}
    >
      <Container size="custom" className="mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <h4 className="select-none text-lg font-bold tracking-tight my-4 transition duration-150 ease-out transform">
              <Link href="/" passHref>
                <a className="flex items-center h-6 w-auto">
                  {/* <Icon
                    parentColor={data.color}
                    data={{
                      name: data.icon.name,
                      color: data.icon.color,
                      style: data.icon.style,
                    }}
                    className="inline-block h-auto w-10 mr-1"
                  />{" "}
                  Parlour Development */}
                  <img className="h-10" src={ParlourLogo.src} alt="logo" />
                </a>
              </Link>
            </h4>

            {isDesktop && (
              <>
                <hr className="mx-8 w-px h-10 border-r-[1px] border-parlourDark" />
                <ul className="flex gap-6 sm:gap-8 lg:gap-10 text-parlourDark">
                  {data.nav &&
                    data.nav.map((item, i) => {
                      const activeItem =
                        item.href === ""
                          ? typeof location !== "undefined" &&
                            location.pathname == "/"
                          : windowUrl.includes(item.href);
                      return (
                        <li key={`${item.label}-${i}`} className="">
                          <Link href={`${prefix}/${item.href}`} passHref>
                            <a className="select-none	text-base inline-block tracking-wide font-regular transition duration-150 ease-out opacity-70 hover:opacity-100 py-5">
                              {item.label}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </>
            )}
          </div>
          {!isDesktop && (
            <div
              className="cursor-pointer"
              onClick={() => setMenuOpen((old) => !old)}
            >
              <Icon
                parentColor={data.color}
                data={{
                  name: "menu",
                  color: "black",
                  style: "square",
                  size: "small",
                }}
              />
              <Menu
                noOverlay
                right
                noTransition
                customBurgerIcon={false}
                isOpen={isMenuOpen}
                width="100%"
                className="w-full h-screen bg-white mt-3 md:mt-6"
              >
                <ul className="fixed h-screen z-50 flex !text-parlourDark bg-white flex-col w-full pt-8">
                  {data.nav &&
                    data.nav.map((item, i) => {
                      const activeItem =
                        item.href === ""
                          ? typeof location !== "undefined" &&
                            location.pathname == "/"
                          : windowUrl.includes(item.href);
                      return (
                        <li
                          key={`${item.label}-${i}`}
                          className="flex mx-auto justify-center items-center"
                        >
                          <Link href={`${prefix}/${item.href}`} passHref>
                            <a className="select-none inline-block tracking-wide !text-parlourDark font-semibold ease-out hover:opacity-100 py-1 md:py-3 xl:py-6 text-xl hover:scale-110 transition duration-300">
                              {item.label}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </Menu>
            </div>
          )}
          {isDesktop && <ContactUsButton />}
        </div>
        {/* <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        /> */}
      </Container>
    </nav>
  );
};

const ContactUsButton = () => (
  <Link href="/contact">
    <a
      className="px-6 py-2 text-md hover:scale-95 duration-300 transition shadow-lg bg-gradient-to-r from-parlourBlue to-parlourGreen font-bold text-white flex flex-row items-center"
      style={{
        borderTopLeftRadius: "1.2rem",
        borderBottomRightRadius: "1.2rem",
      }}
      onClick={() =>
        ReactGA.event({
          category: "Navbar Click",
          action: "ContactUs",
        })
      }
    >
      Contact us <FaLongArrowAltRight className="ml-2" />
    </a>
  </Link>
);
