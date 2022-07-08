import React from "react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { Container } from "./container";

interface Props {
  data?: TinaMarkdownContent | TinaMarkdownContent[];
  className?: string;
}

export const MdSectionHeading: React.FC<Props> = ({ data, className = "" }) => {
  if (!data) return <></>;

  return (
    <Container
      size="medium"
      className={`lg:text-3xl sm:text-2xl text-xl text-center leading-none ${className}`}
    >
      <TinaMarkdown content={data} />
    </Container>
  );
};
