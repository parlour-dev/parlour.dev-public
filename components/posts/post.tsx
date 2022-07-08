/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import format from "date-fns/format";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import Link from "next/link";
import { HiArrowNarrowRight, HiArrowRight } from "react-icons/hi";
import { signup } from "../../util/campaignSignup";
import { NewsletterSignup } from "../util/newsletterSignup";
import Image from "next/image";

const components: Components<{
  BlockQuote: {
    children: TinaMarkdownContent;
    authorName: string;
  };
  DateTime: {
    format?: string;
  };
  NewsletterSignup: {
    placeholder: string;
    buttonText: string;
    children: TinaMarkdownContent;
    disclaimer?: TinaMarkdownContent;
  };
}> = {
  BlockQuote: (props: {
    children: TinaMarkdownContent;
    authorName: string;
  }) => {
    return (
      <div>
        <blockquote>
          <TinaMarkdown content={props.children} />
          {props.authorName}
        </blockquote>
      </div>
    );
  },
  DateTime: (props) => {
    const dt = React.useMemo(() => {
      return new Date();
    }, []);

    switch (props.format) {
      case "iso":
        return <span>{dt.toISOString()}</span>;
      case "utc":
        return <span>{dt.toUTCString()}</span>;
      case "local":
        return <span>{dt.toLocaleDateString()}</span>;
      default:
        return <span>{dt.toLocaleDateString()}</span>;
    }
  },
  NewsletterSignup: (props) => (
    <aside className="py-4">
      <NewsletterSignup {...props} />
    </aside>
  ),
};

export const Post = (props) => {
  const date = new Date(props.date);
  let formattedDate = "";
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "MMM dd, yyyy");
  }

  return (
    <Section>
      <div className="relative w-[100vw] h-[50vh] min-h-[450px] flex flex-col items-center justify-end text-white bg-gradient-to-t from-black to-transparent">
        <Container
          size="custom"
          className="w-full flex flex-col md:flex-row justify-between items-end mb-4 !max-w-5xl"
        >
          <div>
            <h3 className="leading-tight">
              <Link href="/posts">
                <a className="hover:underline">Parlour Development</a>
              </Link>{" "}
              /{" "}
              <Link href="/posts">
                <a className="hover:underline">all articles</a>
              </Link>
            </h3>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              {props.title}
            </h1>
          </div>
          <div>
            <h2 className="text-md leading-normal mb-2">
              By {props.author.name}
            </h2>
          </div>
        </Container>
        {props.heroImg && (
          <Image
            src={props.heroImg}
            alt="article hero"
            layout="fill"
            objectFit="cover"
            className="-z-1"
          />
        )}
      </div>
      <Container className="!max-w-5xl" size="medium">
        <article className="flex flex-col prose md:prose-lg w-full !max-w-none article-content">
          <TinaMarkdown components={components} content={props._body} />
        </article>
      </Container>
      <Container className="!max-w-5xl" size="medium">
        <h1 className="text-xl font-bold">Read more...</h1>
        <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-6 md:gap-8 justify-center items-center">
          {props.allPosts
            .filter(({ node }) => {
              return node.title !== props.title;
            })
            .sort((el1, el2) => {
              const date1 = new Date(el1.node.date || 0);
              const date2 = new Date(el2.node.date || 0);
              return date1 < date2;
            })
            .slice(0, 3)
            .map((el, i) => {
              return <ReadMoreArticle key={i} post={el.node} />;
            })}
        </div>
      </Container>
    </Section>
  );
};

const ReadMoreArticle = ({ post }) => {
  return (
    <Link href={`/post/${post._sys.filename}`}>
      <a
        className="relative w-full max-w-[15rem] sm:max-w-none sm:w-1/3 p-4 rounded-[18px] overflow-hidden flex flex-col justify-end bg-gradient-to-t from-black to-transparent"
        style={{
          aspectRatio: "1",
        }}
      >
        {post.heroImg && (
          <Image
            src={post.heroImg}
            alt=""
            layout="fill"
            objectFit="cover"
            className="-z-1"
          />
        )}
        <h2 className="text-md md:text-lg font-bold leading-tight text-white">
          {post.title}
        </h2>
      </a>
    </Link>
  );
};
