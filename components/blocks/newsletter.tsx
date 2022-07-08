import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaTemplate } from "tinacms";
import { MdSectionHeading } from "../util/mdSectionHeading";
import { NewsletterSignup } from "../util/newsletterSignup";

export const Newsletter = ({ data }) => {
  return (
    <Section className="py-24">
      <MdSectionHeading data={data.heading} />
      <Container className="!max-w-5xl" size="custom">
        <article className="flex flex-col prose-lg w-full !max-w-none article-content">
          <NewsletterSignup buttonText={data.buttonText} />
        </article>
      </Container>
    </Section>
  );
};

export const newsletterBlockSchema: TinaTemplate = {
  name: "newsletter",
  label: "Newsletter",
  ui: {
    defaultValue: {
      buttonText: "Notify Me",
    },
  },
  fields: [
    {
      type: "string",
      label: "Call to action (button text)",
      name: "buttonText",
    },
  ],
};
