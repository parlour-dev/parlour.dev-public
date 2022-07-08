/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://parlour.dev",
  generateRobotsTxt: true,
  exclude: ["/admin"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/admin" }],
  },
  transform: async (config, path) => {
    const defaultTransform = {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };

    /** @type {Partial<import('next-sitemap').ISitemapField>} */
    let modifications = {};

    if (path === "/home") {
      modifications = {
        priority: 1,
        alternateRefs: [
          { href: "https://parlour.dev", hrefIsAbsolute: true, hreflang: "en" },
        ],
      };
    }

    if (path.startsWith("/post")) {
      modifications = {
        changefreq: "weekly",
      };
    }

    if (path.startsWith("/privacy")) {
      modifications = {
        changefreq: "never",
      };
    }

    return {
      ...defaultTransform,
      ...modifications,
    };
  },
};

module.exports = config;
