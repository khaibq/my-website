import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docsSidebar: [
    'introduction',
  ],
  workshops: [
    'intro-workshops',
    {
      type: 'category',
      label: 'Trading Bot with AWS',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'trading-bot/get-started',
        'trading-bot/configurations',
        'trading-bot/trading-function-docker-build',
        'trading-bot/build-spec-cdk-initialized',
        'trading-bot/stack-1-creation',
        'trading-bot/stack-2-creation',
        'trading-bot/deploy-test-cleanup',
      ],
    },
    'aws-static-page',
    'apigateway-dynamodb',
  ],
  practice: [
    'intro-practice'
  ]
};

export default sidebars;
