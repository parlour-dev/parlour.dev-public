import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaField, TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Key } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { MdSectionHeading } from "../util/mdSectionHeading";
import Image from "next/image";

export const Features = ({ data, parentField }) => {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const isMiddle = useMediaQuery("(max-width: 1200px)");

  let basis = undefined;
  if (isDesktop) basis = "30%";
  if (isMiddle) basis = "40%";

  return (
    <Section color={data.color} className="py-24 text-center">
      <MdSectionHeading data={data.heading} />
      <Container
        className={`flex md:flex-row flex-col flex-wrap gap-6 text-left items-center justify-center`}
        size="custom"
      >
        {data.items &&
          data.items.map(function (block: any, i: Key) {
            return (
              <Feature
                tinaField={`${parentField}.items.${i}`}
                featuresColor={data.color}
                key={i}
                data={block}
                basis={basis}
              />
            );
          })}
      </Container>
    </Section>
  );
};

export const NotYourProject = ({ tinaField, basis }) => (
  <FeatureWrapper
    tinaField={tinaField}
    basis={basis}
    className="text-gray-400 order-last lg:order-none"
  >
    <h3
      data-tinafield={`${tinaField}.title`}
      className="text-2xl font-semibold title-font text-center"
    >
      Not your project?
    </h3>
    <Link href="/contact">
      <a className="text-center mt-auto hover:scale-105 duration-300 flex flex-col justify-center items-center w-full px-6 text-lg lg:text-xl">
        Tell us about your vision
        <CgArrowLongRight className={`ml-0 mr-0 opacity-80`} />
      </a>
    </Link>
  </FeatureWrapper>
);

export const Feature = ({ featuresColor, data, tinaField, basis }) => {
  if (!data.title) {
    return <NotYourProject tinaField={tinaField} basis={basis} />;
  }

  return (
    <FeatureWrapper tinaField={tinaField} basis={basis}>
      {data.image && (
        <div className="relative w-full h-[10rem] md:h-[35%]">
          <Image src={data.image} alt="" layout="fill" objectFit="contain" />
        </div>
      )}
      {data.title && (
        <h2
          data-tinafield={`${tinaField}.title`}
          className="mt-auto text-xl xl:text-2xl font-semibold title-font text-center"
        >
          {data.title}
        </h2>
      )}
      {data.text && (
        <p
          data-tinafield={`${tinaField}.text`}
          className="text-md lg:text-base opacity-80 leading-relaxed text-center mb-4"
        >
          {data.text}
        </p>
      )}
      {/* <Link href="/">
        <a className="hover:scale-105 duration-300 flex flex-row justify-center items-center w-[85%] h-13 border-[1px] border-gray-400  rounded-2xl text-gray-400 text-lg">
          Learn more{" "}
          <BiRightArrowAlt className={`ml-0 mr-0 w-6 h-6 opacity-80`} />
        </a>
      </Link> */}
    </FeatureWrapper>
  );
};

const FeatureWrapper = ({ children, tinaField, basis, className = "" }) => (
  <div
    data-tinafield={tinaField}
    className={`${className} flex flex-col text-center items-center lg:text-left max-w-[24rem] h-[28rem] rounded-3xl relative border-2 border-x-pink-500 border-y-red-500 shadow-lg shadow-pink-500/20 p-6`}
    style={{
      flexBasis: basis,
    }}
  >
    {children}
  </div>
);

const featureTemplate: TinaTemplate["fields"] = [
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
    label: "Text",
    name: "text",
    ui: {
      component: "textarea",
    },
  },
];

export const featuresBlockSchema: TinaTemplate = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    description:
      "If you leave the title empty, you will get a 'Not your project?' special element",
  },
  fields: [
    {
      type: "rich-text",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      fields: featureTemplate,
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
