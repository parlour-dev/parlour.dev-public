import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";
import SEOImage from "../../assets/img/parlour-seo.png";

export const Layout = ({ rawData = {}, data = layoutData, children }) => {
  return (
    <>
      <Head>
        <title>
          Blockchain development // NFT creation // tokenomics // crypto tokens
          // Parlour Development
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Launch your blockchain project! Cryptocurrency, NFTs, ICOs, DApps, and more. We are a team of blockchain developers and designers. We are here to help you build your next project."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@parlourdev" />
        <meta name="twitter:creator" content="@parlourdev" />
        <meta property="og:title" content="Parlour Development" />
        <meta
          property="og:description"
          content="Launch your blockchain project! Cryptocurrency, NFTs, ICOs, DApps, and more. We are a team of blockchain developers and designers. We are here to help you build your next project."
        />
        <meta property="og:image" content={SEOImage.src} />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Hotjar session  */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3040460,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`,
          }}
          defer
        />

        {/* Clearbit */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function (d, u, h, s) {
              h = d.getElementsByTagName('head')[0];
              s = d.createElement('script');      
              s.async = 1;
              s.src = u + new Date().getTime();
              h.appendChild(s);
            })(document, 'https://grow.clearbitjs.com/api/pixel.js?v=');`,
          }}
        />
      </Head>
      <div className={`min-h-screen flex flex-col font-sora`}>
        <Header data={data?.header} />
        <div className="flex-1 text-gray-800 flex flex-col">{children}</div>
        <Footer
          rawData={rawData}
          data={data?.footer}
          icon={data?.header.icon}
        />
      </div>
    </>
  );
};
