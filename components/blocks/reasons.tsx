import Image from "next/image";
import Link from "next/link";
import { Key } from "react";
import { TinaTemplate } from "tinacms";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Container } from "../util/container";
import { MdSectionHeading } from "../util/mdSectionHeading";
import { Section } from "../util/section";

export const Reasons = ({ data, parentField }) => {
  return (
    <Section className="py-24">
      <MdSectionHeading data={data.heading} />
      <Container
        className={`flex flex-row flex-wrap sm:gap-1 lg:gap-6 text-left items-center justify-center`}
        size="custom"
      >
        {data.items &&
          data.items.map(function (block: any, i: Key) {
            return <Reason key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};

const Reason = ({ data }) => (
  <div className="w-[49%] md:w-[30%] xl:w-1/4 min-w-[10rem]">
    <Link
      href={data.href || "#"}
      scroll={data.href !== "#" && data.href !== "/"}
    >
      <a
        className="hover:scale-90 duration-300 transition relative flex flex-col justify-end m-1 sm:m-2 rounded-[30px] overflow-hidden"
        style={{ aspectRatio: "1" }}
      >
        <div className="p-4 sm:p-6 bg-gradient-to-t from-parlourDark/60 to-parlourGreen/10 rounded-[30px] w-full h-full flex flex-col justify-end">
          {data.title && (
            <h2 className="text-white font-bold text-md sm:text-lg lg:text-xl leading-none">
              {data.title}
            </h2>
          )}
        </div>
        {data.image && (
          <Image
            src={data.image}
            alt=""
            layout="fill"
            objectFit="cover"
            className="-z-1"
          />
        )}
      </a>
    </Link>
  </div>
);

const defaultReason = {
  title: "Another reason",
  href: "/",
  image: "",
};

const reasonTemplate: TinaTemplate["fields"] = [
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
    type: "string",
    label: "Link",
    name: "href",
  },
];

export const reasonsBlockSchema: TinaTemplate = {
  name: "reasons",
  label: "Reasons",
  ui: {
    // previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultReason, defaultReason, defaultReason],
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "Reason Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultReason,
        },
      },
      fields: reasonTemplate,
    },
  ],
};
