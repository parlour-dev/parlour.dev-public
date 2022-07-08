import React from "react";
import type { Page, PageBlocks } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { Reasons } from "./blocks/reasons";
import { ClientsRoll } from "./blocks/clientsRoll";
import { ContentStack } from "./blocks/contentStack";
import { Consultation } from "./blocks/consultation";
import { FAQ } from "./blocks/faq";
import { Software } from "./blocks/software";
import { Newsletter } from "./blocks/newsletter";
import { Project } from "./blocks/project";
import { MinorHero } from "./blocks/minorHero";
import { Padding } from "./blocks/padding";

const blockElements: {
  [K in PageBlocks["__typename"]]: ({ data, parentField }) => JSX.Element;
} = {
  PageBlocksClientsRoll: ClientsRoll,
  PageBlocksContent: Content,
  PageBlocksHero: Hero,
  PageBlocksFeatures: Features,
  PageBlocksTestimonial: Testimonial,
  PageBlocksReasons: Reasons,
  PageBlocksContentStack: ContentStack,
  PageBlocksConsultation: Consultation,
  PageBlocksFaq: FAQ,
  PageBlocksSoftware: Software,
  PageBlocksNewsletter: Newsletter,
  PageBlocksProject: Project,
  PageBlocksMinorHero: MinorHero,
  PageBlocksPadding: Padding,
};

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            if (!block.__typename) return null;

            const Element = blockElements[block.__typename];

            if (!Element) return null;

            return (
              <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                <Element data={block} parentField={`blocks.${i}`} />
              </div>
            );
          })
        : null}
    </>
  );
};
