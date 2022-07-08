import { Key } from "react";
import { TinaTemplate } from "tinacms";
import { Container } from "../util/container";
import { Section } from "../util/section";
import ScrollContainer from "react-indiana-drag-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";

export const ClientsRoll = ({ data, parentField }) => {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  return (
    <div>
      <Section>
        <Container size="small" className="flex flex-col">
          <h1 className="text-xl md:text-2xl text-[#2a3036]">
            Trusted by <strong>industry leaders</strong>
          </h1>
          <hr className="my-2 mb-4 w-9/12 h-[4px] rounded-full bg-gradient-to-r from-parlourGreen to-parlourBlue" />
          {isDesktop ? (
            <div
              className={`flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between gap-1 sm:gap-4 md:gap-6 w-full`}
            >
              {data.items &&
                data.items.map(function (block: any, i: Key) {
                  return (
                    <Client key={i} data={block} maxHeight={block.maxHeight} />
                  );
                })}
            </div>
          ) : (
            // @ts-ignore
            <ScrollContainer
              className="scroll-container w-full"
              vertical={false}
              horizontal
              hideScrollbars={false}
            >
              <div className={`flex flex-row gap-6 items-center`}>
                {data.items &&
                  data.items.map(function (block: any, i: Key) {
                    return (
                      <img
                        key={i}
                        src={block.image}
                        alt={block.alt}
                        style={{ height: block.maxHeight || "9rem" }}
                      />
                    );
                  })}
              </div>
            </ScrollContainer>
          )}
        </Container>
      </Section>
    </div>
  );
};

const Client = ({ data, className = "", maxHeight = "9rem" }) => (
  <>
    {data.image && (
      <div className={`flex flex-row items-center justify-center ${className}`}>
        <img style={{ maxHeight }} src={data.image} alt={data.alt} />
      </div>
    )}
  </>
);

export const clientsRollBlockSchema: TinaTemplate = {
  name: "clientsRoll",
  label: "Clients Roll",
  ui: {
    // previewSrc: "/blocks/features.png",
  },
  fields: [
    {
      type: "object",
      label: "Client Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          image: "",
          alt: "Example client",
        },
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
        },
        {
          type: "string",
          name: "maxHeight",
          label: "Max Height (default: 9rem)",
        },
      ],
    },
  ],
};
