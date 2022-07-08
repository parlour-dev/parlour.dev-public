import AliceCarousel from "react-alice-carousel";
import { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Container } from "../util/container";
import { Section } from "../util/section";

export const Project = ({ data }) => (
  <Section className="mt-16">
    <Container className="flex flex-col">
      <h1 className="text-center font-bold text-lg md:text-xl">{data.name}</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 sm:p-6">
          {data.pictures && (
            <AliceCarousel infinite={false} mouseTracking>
              {data.pictures?.map((block, i) => (
                <Picture src={block.image} key={i} />
              ))}
            </AliceCarousel>
          )}
        </div>
        <div className="w-full md:w-1/2 px-6 py-6 md:py-12 prose-sm md:prose">
          <TinaMarkdown content={data.description} />
        </div>
      </div>
      <div className="w-full p-6 pt-0 md:pt-6 flex flex-row justify-center">
        {data.casestudy && (
          <div className="prose-sm md:prose !max-w-4xl">
            <h2>Case study</h2>
            <TinaMarkdown content={data.casestudy} />
          </div>
        )}
      </div>
    </Container>
  </Section>
);

const Picture = ({ src }) => (
  <div
    style={{ aspectRatio: "1.5" }}
    className="m-4 rounded-[30px] flex justify-center items-center"
  >
    <img
      src={src}
      draggable={false}
      className="max-w-full max-h-full rounded-[20px] shadow-md"
      alt=""
    />
  </div>
);

export const projectBlockSchema: TinaTemplate = {
  name: "project",
  label: "Single Project",
  fields: [
    {
      name: "name",
      type: "string",
      label: "Name",
    },
    {
      name: "description",
      type: "rich-text",
      label: "Description",
    },
    {
      name: "casestudy",
      type: "rich-text",
      label: "Case Study",
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
  ],
};
