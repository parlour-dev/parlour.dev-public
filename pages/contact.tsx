import { useState } from "react";
import { contact } from "../util/contact";
import { Layout } from "../components/layout";
import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import ReactGA from "react-ga4";
import Script from "next/script";
import Head from "next/head";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setMessage("");
    setName("");
    setEmail("");
    contact(message, email, name);
  };

  return (
    <Layout>
      <Section className="flex-1 mt-4">
        <Container size="large" className="!max-w-3xl">
          <div className="bg-white rounded-2xl drop-shadow-xl p-6 flex flex-col items-center">
            <h1 className="text-lg text-left w-full sm:text-xl md:text-2xl py-2 font-bold">
              Contact us
            </h1>
            <div className="p-6 sm:p-0 mt-10 mx-auto">
              <p className="sm:p-6 md:p-0 text-base sm:text-lg md:text-xl  leading-tight font-semibold ">
                To work with us email us at{" "}
                <span className="w-[80%] text-transparent bg-clip-text break-words bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400">
                  contact@parlour.dev
                </span>{" "}
                or use the form below
              </p>
            </div>
            {/* Calendly inline widget begin */}
            <Head>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              />
            </Head>
            <div
              className="calendly-inline-widget w-full min-w-[320px] h-[630px]"
              data-url="https://calendly.com/d/dpc-6pz-926?hide_gdpr_banner=1"
            ></div>
            {/* Calendly inline widget end */}
            {/* <form
              className="flex flex-col w-[90%] bg-white mt-10 rounded-3xl drop-shadow-2xl"
              onSubmit={onSubmit}
            >
              <div className="flex flex-col m-6">
                <div className="flex flex-col md:flex-row justify-between mt-2">
                  <div className="flex flex-col w-[100%] md:w-6/12 md:mr-[2%]">
                    <label className="text-left font-semibold ml-6">Name</label>
                    <input
                      className="bg-[#f5f5f5] rounded-full h-10 border-2 px-6 border-sky-400"
                      type="text"
                      name="user_name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-[100%] md:w-6/12">
                    <label className="text-left mt-4 md:mt-[0px] font-semibold ml-6">
                      Email
                    </label>
                    <input
                      className="bg-[#f5f5f5] rounded-full h-10 border-2 px-6 border-sky-400"
                      type="email"
                      name="user_email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <label className="text-left font-semibold mt-6 ml-6">
                  Message
                </label>
                <textarea
                  className="bg-[#f5f5f5] rounded-3xl h-64 p-6 border-2 border-sky-400"
                  name="message"
                  placeholder="Hi, I need a web app for my startup and I think you'd do a great job."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <input
                  className="text-white w-48 text-md font-bold mx-auto h-12 mt-8 rounded-3xl bg-gradient-to-r bg-radial-at-tl from-sky-400 to-purple-400 hover:scale-105 hover:drop-shadow-lg duration-300"
                  type="submit"
                  value="Send"
                  onClick={() =>
                    ReactGA.event({
                      category: "Contact",
                      action: "SendContact",
                    })
                  }
                />
              </div>
            </form> */}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
