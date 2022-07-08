import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { TinaTemplate } from "tinacms";
import { MdSectionHeading } from "../util/mdSectionHeading";
import { Disclosure, Transition } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const FAQ = ({ data }) => {
  return (
    <Section className="py-24">
      <MdSectionHeading data={data.heading} />
      <Container className="!max-w-4xl leading-snug" size="custom">
        {data.questions?.map((el, i) => {
          return (
            <Disclosure key={i}>
              <Disclosure.Button className="w-full bg-parlourDark text-white py-4 px-8 font-semibold flex flex-row justify-between items-center text-sm md:text-md text-left rounded-[20px] mb-3 last:mb-0">
                {el.question}
                <div className="flex items-center justify-center">
                  <MdKeyboardArrowDown size={32} />
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="my-6 mx-8">
                  {el.answer && <TinaMarkdown content={el.answer} />}
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          );
        })}
      </Container>
    </Section>
  );
};

export const faqBlockSchema: TinaTemplate = {
  name: "faq",
  label: "FAQ",
  fields: [
    {
      type: "rich-text",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      list: true,
      name: "questions",
      fields: [
        {
          name: "question",
          type: "string",
          label: "Question",
        },
        {
          name: "answer",
          type: "rich-text",
          label: "Answer",
        },
      ],
    },
  ],
};
