import Image from "next/image";
import React from "react";
import { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Container } from "../util/container";
import { MdSectionHeading } from "../util/mdSectionHeading";
import { Section } from "../util/section";

export const ContentStack = ({ data, parentField }) => {
  return (
    <Section color={data.color} className="py-24 text-center">
      <MdSectionHeading data={data.heading} />
      <Container className="flex flex-col gap-y-2" size="custom">
        {data.items &&
          data.items.map(function (block: any, i: number) {
            return (
              <ContentStackElement key={i} data={block} flip={i % 2 === 1} />
            );
          })}
      </Container>
    </Section>
  );
};

const ContentStackElement = ({ data, flip }) => (
  <div
    className={`flex flex-col-reverse ${
      flip ? "sm:flex-row-reverse" : "sm:flex-row"
    } justify-evenly items-center text-left my-6`}
  >
    <div className="w-full sm:w-[45%]">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-none mb-2">
        {data.title}
      </h2>
      {data.description && <TinaMarkdown content={data.description} />}
    </div>
    <div className="relative w-full py-4 sm:py-0 max-h-50 sm:max-h-80 sm:w-[45%] h-72">
      {data.image && (
        <Image src={data.image} alt="" objectFit="contain" layout="fill" />
      )}
    </div>
  </div>
);

const contentElementTemplate: TinaTemplate["fields"] = [
  {
    type: "image",
    label: "Image",
    name: "image",
  },
  {
    type: "string",
    label: "Title",
    name: "title",
  },
  {
    type: "rich-text",
    label: "Description",
    name: "description",
  },
];

export const contentStackBlockSchema: TinaTemplate = {
  name: "contentStack",
  label: "Content Stack",
  ui: {
    // previewSrc: "/blocks/features.png",
  },
  fields: [
    {
      type: "rich-text",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "Content Items",
      name: "items",
      list: true,
      fields: contentElementTemplate,
    },
  ],
};
