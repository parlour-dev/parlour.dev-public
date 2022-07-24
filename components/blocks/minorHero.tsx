import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { TinaTemplate } from "tinacms";
import Image from "next/image";

export const MinorHero = ({ data }) => {
  const gradient = { from: data.from || "#1eff8d", to: data.to || "#38f0e1" };

  return (
    <Section className={data?.compact ? "py-12" : "py-24"}>
      <Container className="!max-w-6xl" size="custom">
        <div className="flex flex-col relative leading-snug w-full">
          <div className="min-h-[30rem] w-full md:w-9/12 py-6 md:py-24 px-6 md:pl-12 md:pr-[25%] bg-parlourDark flex flex-col justify-end items-center rounded-[37px]">
            <div
              className="w-full px-4 md:px-6 prose md:prose-xl prose-dark bg-clip-text children:transparent"
              style={{
                background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`,
                backgroundClip: "text"
              }}
            >
              <TinaMarkdown content={data.heading} />
            </div>
            <div className="w-full px-4 md:px-6 mb-6 md:mb-0 prose md:prose-lg leading-tight prose-dark">
              <TinaMarkdown content={data.text} />
            </div>
            {data.picture && (
              <div className="w-full max-w-[30rem] md:max-w-none h-56 md:h-auto md:w-auto relative md:absolute md:top-[10%] md:bottom-[10%] md:left-[50%] md:right-0 rounded-[27x] md:rounded-[37px] shadow-lg">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={data.picture}
                  className="w-full h-full object-cover rounded-[27px] md:rounded-[37px] bg-white"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const minorHeroBlockSchema: TinaTemplate = {
  name: "minorHero",
  label: "Minor Hero",
  ui: {
    itemProps: (item) => ({
      label: `Minor hero ${item.compact ? " (compact)" : ""}`,
    }),
  },
  fields: [
    {
      type: "rich-text",
      label: "Heading",
      name: "heading",
    },
    {
      type: "rich-text",
      label: "Text",
      name: "text",
    },
    {
      type: "image",
      label: "Picture",
      name: "picture",
    },
    {
      type: "boolean",
      label: "Compact (smaller vertical padding)",
      name: "compact",
    },
    {
      type: "string",
      name: "from",
      label: "Gradient: from color",
    },
    {
      type: "string",
      name: "to",
      label: "Gradient: to color",
    },
  ],
};
