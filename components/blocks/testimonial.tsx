import React, { useRef } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import { MdSectionHeading } from "../util/mdSectionHeading";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import useMediaQuery from "../../hooks/useMediaQuery";
import AliceCarousel from "react-alice-carousel";
import Image from "next/image";

export const Testimonial = ({ data, parentField = "" }) => {
  const isDesktop = useMediaQuery("(min-width: 800px)");
  const carousel = useRef<AliceCarousel>();

  return (
    <Section color={data.color} className="py-24">
      <MdSectionHeading data={data.heading} />
      <Container size="custom" className="w-full flex flex-row justify-between">
        <button
          onClick={() => carousel.current.slidePrev({})}
          aria-label="previous testimonial"
        >
          <FaArrowLeft size={isDesktop ? 42 : 24} />
        </button>
        <div className="w-[80%]">
          <AliceCarousel
            ref={carousel}
            responsive={{
              800: { items: 2 },
              1100: { items: 3 },
            }}
            infinite
            mouseTracking
            renderPrevButton={() => <></>}
            renderNextButton={() => <></>}
            renderDotsItem={() => <></>}
          >
            {data.testimonials?.map((block, i) => (
              <div key={i} className="flex flex-row justify-center">
                <Reference data={block} />
              </div>
            ))}
          </AliceCarousel>
        </div>
        <button
          onClick={() => carousel.current.slideNext({})}
          aria-label="next testimonial"
        >
          <FaArrowRight size={isDesktop ? 42 : 24} />
        </button>
      </Container>
    </Section>
  );
};

const Reference = ({ data }) => {
  return (
    <div className="flex flex-col shadow-md max-w-[25rem] rounded-tr-[50px] rounded-bl-[50px] m-2">
      <div className="relative h-56 sm:h-72 w-full text-white rounded-tr-[50px] overflow-hidden">
        <div className="rounded-tr-[50px] bg-gradient-to-t text-right from-[#2A3036ee] to-transparent w-full h-full flex flex-col justify-end items-end p-3">
          <h2 className="font-bold text-base sm:text-lg leading-tight">
            {data.name}
          </h2>
          <p className="text-base sm:text-lg leading-tight">{data.title}</p>
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
      </div>
      <div className="p-4 sm:p-6 flex flex-col min-h-[14rem]">
        <TinaMarkdown content={data.reference} />
        <FaQuoteRight size={20} className="mt-auto self-end" />
      </div>
    </div>
  );
};

export const testimonialBlockSchema: TinaTemplate = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
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
      label: "Testimonials",
      name: "testimonials",
      list: true,
      fields: [
        {
          name: "name",
          label: "Name",
          type: "string",
        },
        {
          name: "title",
          label: "Job title",
          type: "string",
        },
        {
          name: "image",
          label: "Photo",
          type: "image",
        },
        {
          name: "reference",
          type: "rich-text",
          label: "Reference",
        },
      ],
    },
  ],
};
