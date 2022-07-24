import AliceCarousel from "react-alice-carousel";
import { FaArrowRight } from "react-icons/fa";
import { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Container } from "../util/container";
import { Section } from "../util/section";
import {
  SoftwareItem,
  StrokedText,
  TextGradient,
  ThirdContainer,
} from "./software";

export const Project = ({ data }) => {
  // const gradient = { to: "#182FFB", from: "#E02EFD" };
  const gradient = { to: data.to || "black", from: data.from || "white" }
  return (
    <Section className="py-24">
      <Container className="flex flex-row gap-8 items-stretch justify-between">
        <div className="h-full min-h-[30rem] w-[70%] flex flex-row items-center justify-center">
          {data.pictures && (
            <AliceCarousel infinite={false} mouseTracking>
              {data.pictures?.map((block, i) => (
                <Picture src={block.image} key={i} />
              ))}
            </AliceCarousel>
          )}
        </div>
        <ThirdContainer>
          <SoftwareItem type="bg" {...gradient} className="h-1/3">
            <SoftwareItem type="text" className="bg-white h-full" center>
              <StrokedText {...gradient}>{data.name}</StrokedText>
            </SoftwareItem>
          </SoftwareItem>
          <SoftwareItem
            type="text"
            className="bg-parlourDark !justify-end h-2/3"
            center
          >
            <TextGradient
              {...gradient}
              className="font-bold text-xl lg:text-2xl text-left w-full"
            >
              {data.tagline}
            </TextGradient>
          </SoftwareItem>
        </ThirdContainer>
      </Container>

      {data.description && (
        <Container className="flex flex-col gap-3 prose-lg">
          <h1 className="text-2xl font-bold">What was the project about?</h1>
          <TinaMarkdown content={data.description} />
        </Container>
      )}

      <Container className="flex flex-col gap-3 items-stretch justify-between">
        <h1 className="text-xl font-bold">What did we build?</h1>

        <div className="flex flex-col gap-8 items-stretch justify-between">
          <div className="flex flex-row gap-8 items-stretch justify-between min-h-[10rem]">
            <SoftwareItem
              type="text"
              className="bg-parlourDark text-white prose-lg"
              basis="75%"
            >
              {data.built && <TinaMarkdown content={data.built} />}
            </SoftwareItem>
            <SoftwareItem
              type="text"
              className="bg-parlourDark text-white h-fit w-fit"
              style={{ aspectRatio: "1" }}
              basis="25%"
            >
              <TextGradient
                {...gradient}
                className="text-lg lg:text-xl font-bold"
              >
                Tech stack
              </TextGradient>
              {data.stack}
            </SoftwareItem>
          </div>

          <div className="flex flex-row gap-8 items-stretch justify-between min-h-[8rem] w-full">
            <SoftwareItem
              type="bg"
              className="!bg-parlourDark text-base lg:text-lg"
              basis="50%"
            >
              <SoftwareItem
                type="text"
                className="bg-white h-full w-full leading-tight"
              >
                <p>Seems interesting?</p>
                <p>Check out</p>
                <p className="flex flex-row flex-wrap items-center">
                  the case study <FaArrowRight className="ml-2" size={24} />
                </p>
              </SoftwareItem>
            </SoftwareItem>

            <SoftwareItem type="bg" basis="50%" {...gradient}>
              <SoftwareItem
                type="text"
                className="bg-white h-full w-full"
                center
              >
                <TextGradient className="text-xl lg:text-2xl" {...gradient}>
                  Case study
                </TextGradient>
              </SoftwareItem>
            </SoftwareItem>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Picture = ({ src, className = "" }) => (
  <div
    className={`mx-6 rounded-[30px] flex justify-center items-center ${className}`}
    style={{ aspectRatio: "16/9" }}
  >
    <img
      src={src}
      draggable={false}
      className="max-w-full max-h-full rounded-[20px] shadow-md object-contain"
      alt=""
    />
  </div>
);

export const projectBlockSchema: TinaTemplate = {
  name: "project",
  label: "Single Project",
  ui: {
    itemProps: (item) => ({
      label: item.name ? `Project: ${item.name}` : "Project",
    }),
  },
  fields: [
    {
      name: "name",
      type: "string",
      label: "Name",
    },
    {
      name: "tagline",
      type: "string",
      label: "Tagline",
    },
    {
      name: "description",
      type: "rich-text",
      label: "Project description",
    },
    {
      name: "built",
      type: "rich-text",
      label: "What did we build?",
    },
    {
      name: "stack",
      type: "string",
      label: "Tech stack",
    },
    {
      name: "pictures",
      type: "object",
      label: "Pictures",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
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
