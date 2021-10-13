const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'SIR docs',
  tagline: 'Documentation for Synthetics Implemented Right',
  url: 'https://sir.trading/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SIR-trading', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl: 'https://github.com/SIR-trading/SIR-docs'
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
        sitemap: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SIR docs',
        logo: {
          alt: 'SIR docs',
          src: 'img/logo.png',
        },
        items: [
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SIR-trading',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/3YnhkBjDfA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SIRdotTrading',
              },
              {
                label: 'E-mail',
                href: 'mailto:support@sir.trading',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Whitepaper',
                to: 'https://sir.trading/whitepaper.pdf',
                position: "right",
                className: "persistent",
              },
              {
                label: 'Blog',
                to: 'https://medium.com/@xatarra/sir-pleased-to-meet-you-32b92f0e6fc7',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SIR-trading/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SIR.trading, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
