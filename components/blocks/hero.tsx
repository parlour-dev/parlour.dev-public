import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import Link from "next/link";
import ReactGA from "react-ga4";
import Image from "next/image";

const Stroke = ({ text }) => <span className="stroke"> {text}</span>;

export const Hero = ({ data, parentField }) => {
  return (
    <Section className="w-full h-auto">
      <Container className="3xl:mx-auto flex flex-col overflow-hidden items-center lg:flex-row w-full bg-white rounded-b-3xl">
        <div className="lg:w-1/2  flex flex-col items-center lg:items-start justify-center">
          <div className="mt-12 sm:mt-24 md:mt-48 lg:mt-0 leading-none text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left text-parlourDark">
            <TinaMarkdown
              content={data.text || {}}
              // @ts-ignore
              components={{ stroke: Stroke }}
            ></TinaMarkdown>
          </div>
          {data?.cta && (
            <Link href={data.cta.href || "/"}>
              <a className="flex justify-center items-center">
                <button
                  className="hover:scale-95 transition duration-300 w-full sm:w-10/12 shadow-lg shadow-neutral-200 lg:w-auto mt-12 sm:mt-20 bg-gradient-to-r from-parlourBlue to-parlourGreen text-white py-6 px-6 sm:px-10 font-bold text-lg rounded-tl-[2rem] rounded-br-[2rem]"
                  onClick={() =>
                    ReactGA.event({
                      category: "Contact",
                      action: "HomeContact",
                    })
                  }
                >
                  {data.cta.text}
                </button>
              </a>
            </Link>
          )}
        </div>
        {data.image && (
          <div className="order-first sm:order-last lg:w-6/12 flex justify-end overflow-hidden ml-[18%] lg:ml-auto">
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] w-[25rem] md:w-[50rem] mt-6 sm:mt-20 sm:mb-10 lg:mt-32 lg:ml-24">
              {/* <Image
                src={data.image.src}
                alt={data.image.alt}
                draggable={false}
                layout="fill"
                objectFit="contain"
                className=""
              /> */}
              <img
                src={data.image.src}
                alt={data.image.alt}
                draggable={false}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
  },
  fields: [
    {
      label: "Text",
      name: "text",
      type: "rich-text",
      templates: [
        {
          name: "stroke",
          label: "Stroked Text",
          inline: true,
          fields: [
            {
              name: "text",
              label: "Text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Call to action",
      name: "cta",
      fields: [
        {
          name: "href",
          label: "Link",
          type: "string",
        },
        {
          name: "text",
          label: "Text",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
