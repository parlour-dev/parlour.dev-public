import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export const Posts = ({ data }) => {
  return (
    <>
      {data
        .sort((el1, el2) => {
          const date1 = new Date(el1.node._values.date || 0);
          const date2 = new Date(el2.node._values.date || 0);
          return date1 < date2;
        })
        .map((postData) => {
          const post = postData.node;
          return (
            <Link
              key={post._sys.filename}
              href={`/post/` + post._sys.filename}
              passHref
            >
              <a
                key={post.id}
                className="relative min-h-[32rem] group flex flex-col justify-end bg-transparent mb-8 last:mb-0 rounded-[30px] transition-all duration-150 ease-out shadow-lg hover:shadow-2xl px-8 py-10 bg-gradient-to-b from-[#2A303677] to-parlourDark text-white"
              >
                {post._values.heroImg && (
                  <div className="absolute left-0 top-0 -z-1 h-full w-full rounded-[30px] bg-transparent">
                    <Image
                      src={post._values.heroImg}
                      alt=""
                      className="rounded-[30px]"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <h3
                  className={`text-lg sm:text-xl lg:text-2xl xd:text-3xl leading-tight font-semibold title-font mb-5 mt-10 transition-all duration-150 ease-out`}
                >
                  {post._values.title}{" "}
                  <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
                  </span>
                </h3>
                <div className="prose-dark lg:prose-lg w-full max-w-none mb-5 leading-snug lg:leading-tight">
                  <TinaMarkdown content={post._values.excerpt} />
                </div>
                <div className="flex items-center -mb-2">
                  <p className="text-sm font-medium">{post?.author?.name}</p>
                  <p className="text-sm">{post.date}</p>
                </div>{" "}
              </a>
            </Link>
          );
        })}
    </>
  );
};
