import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Personal site with passion',
  tagline: 'Learning is fun! Coding is always fun!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://clean-equipment.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rubylk', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'vi',
    ],
    localeConfigs: {
      vi: {
        label: 'Vietnamese',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/khaibq/my-personal-site/edit/main',
          editLocalizedFiles: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/khaibq/my-personal-site/edit/main',
          editLocalizedFiles: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-217907DME7',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        searchBarPosition: "right",
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'gfe', // Increment on change
      content: `⭐️ The initial stage of my personal site published at <a href="https://www.clean-equipment.com/" target="_blank">www.clean-equipment.com</a>. Please ENJOY! ⭐️`,
      isCloseable: false,
    },
    navbar: {
      hideOnScroll: false,
      title: 'Khai Bui',
      logo: {
        alt: 'Khai Bui Logo',
        src: 'img/khaibui.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'workshops',
          position: 'left',
          label: 'Workshops',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'AWS Cheat Sheets',
        },
        {
          type: 'docSidebar',
          sidebarId: 'practice',
          position: 'left',
          label: 'Code Practice',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/khaibq/my-website',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Workshop',
              to: '/docs/intro-workshops',
            },
            {
              label: 'AWS Cheat Sheets',
              to: '/docs/introduction',
            },
            {
              label: 'Code Practice',
              to: '/docs/intro-practice',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/khaibq/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@khaibq',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/khaibq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Khai Bui. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: [
        'java',
        'latex',
        'haskell',
        'matlab',
        'php',
        'powershell',
        'bash',
        'diff',
        'json',
        'scss',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
