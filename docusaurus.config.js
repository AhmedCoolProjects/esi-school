const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESI SCHOOL",
  tagline: "A documentation site for ESI School students",
  url: "https://esi.codeesi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "AhmedCoolProjects", // Usually your GitHub org/user name.
  projectName: "ESISchoolDocs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-s-one",
        path: "docs-s1",
        routeBasePath: "docs-s1",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/AhmedCoolProjects/ESISchoolDocs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-s-two",
        path: "docs-s2",
        routeBasePath: "docs-s2",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/AhmedCoolProjects/ESISchoolDocs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-s-three",
        path: "docs-s3",
        routeBasePath: "docs-s3",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/AhmedCoolProjects/ESISchoolDocs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-s-four",
        path: "docs-s4",
        routeBasePath: "docs-s4",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/AhmedCoolProjects/ESISchoolDocs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-s-five",
        path: "docs-s5",
        routeBasePath: "docs-s5",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/AhmedCoolProjects/ESISchoolDocs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-events",
        path: "docs-events",
        routeBasePath: "docs-events",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/AhmedCoolProjects/ESISchoolDocs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "77296bb7ad922495c8e8033c53ecdf51",
        appId: "63DRANEFZW",
        indexName: "prod_index",
      },
      navbar: {
        title: "ESI School Docs",
        logo: {
          alt: "ESI LOGO",
          src: "img/logos/logo-dark.svg",
          srcDark: "img/logos/logo-light.svg",
          width: 65,
        },
        items: [
          {
            to: "/docs-s1",
            label: "S1",
            position: "left",
            activeBaseRegex: `/docs-s1/`,
          },
          {
            to: "/docs-s2",
            label: "S2",
            position: "left",
            activeBaseRegex: `/docs-s2/`,
          },
          {
            to: "/docs-s3",
            label: "S3",
            position: "left",
            activeBaseRegex: `/docs-s3/`,
          },
          {
            to: "/docs-s4",
            label: "S4",
            position: "left",
            activeBaseRegex: `/docs-s4/`,
          },
          {
            to: "/docs-s5",
            label: "S5",
            position: "left",
            activeBaseRegex: `/docs-s5/`,
          },
          {
            to: "/docs-events",
            label: "Events",
            position: "left",
            activeBaseRegex: `/docs-events/`,
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
            activeBaseRegex: `/blog/`,
          },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          // {
          //   href: "https://github.com/AhmedCoolProjects/ESISchoolDocs",
          //   label: "Github",
          //   position: "right",
          // },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Blog",
            items: [
              {
                label: "Introduction",
                to: "/blog/intro",
              },
            ],
          },
          {
            title: "Events",
            items: [
              {
                label: "2022",
                to: "/docs-events/2022/intro",
              },
            ],
          },
          {
            title: "ESI Clubs",
            items: [
              {
                label: "CODE",
                href: "https://codeesi.com",
              },
              {
                label: "ENACTUS",
                href: "https://enactus.codeesi.com/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/AhmedBargady/ESISchoolDocs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://ahmedbargady.me" target="_blank">JinaCoolProjects</a>. Created with love by Ahmed Bargady`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java"],
      },
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
