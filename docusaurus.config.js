const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            to: "/docs-s1/intro",
            label: "S1",
            position: "left",
            activeBaseRegex: `/docs-s1/`,
          },
          {
            to: "/docs-s2/intro",
            label: "S2",
            position: "left",
            activeBaseRegex: `/docs-s2/`,
          },
          {
            to: "/docs-s3/intro",
            label: "S3",
            position: "left",
            activeBaseRegex: `/docs-s3/`,
          },
          {
            to: "/docs-s4/intro",
            label: "S4",
            position: "left",
            activeBaseRegex: `/docs-s4/`,
          },
          {
            to: "/docs-s5/intro",
            label: "S5",
            position: "left",
            activeBaseRegex: `/docs-s5/`,
          },
          {
            to: "/docs-events/intro",
            label: "Events",
            position: "left",
            activeBaseRegex: `/docs-events/`,
          },
          {
            to: "/blog/intro",
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

      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",

      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",

      //   indexName: "YOUR_INDEX_NAME",

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   //... other Algolia params
      // },
    }),
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9462389809344404",
      async: true,
      crossOrigin: "anonymous",
    },
  ]
};

module.exports = config;
