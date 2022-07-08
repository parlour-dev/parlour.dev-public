import React from "react";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";

export const Padding = ({ data }) => {
  return <div style={{ paddingBottom: data.height }}></div>;
};

export const paddingBlockSchema: TinaTemplate = {
  name: "padding",
  label: "Padding",
  fields: [
    {
      type: "string",
      name: "height",
      label: "Padding (height)",
    },
  ],
};
