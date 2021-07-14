const { description } = require('../../package')

module.exports = {
  title: 'Stay Optimistic.',
  description: description,

  head: [
    [ 'meta', { name: 'theme-color', content: '#3eaf7c' } ],
    [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
    [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ]
  ],

  themeConfig: {
    repo: 'https://github.com/ethereum-optimism/optimism',
    repoLabel: 'github',
    editLinks: true,
    docsDir: 'src',
    docsRepo: 'https://github.com/ethereum-optimism/community-hub',
    docsBranch: 'main',
    editLinkText: `See a typo? We'd 💖 a pull request over on GitHub`,
    lastUpdated: false,
    algolia: {
      apiKey: '47d21d4ea72ed7cb504b1c6c0a46b5a0',
      indexName: 'optimism'
    },
    nav: [
      {
        text: 'faqs',
        link: '/faqs/',
      },
      {
        text: 'discord',
        link: 'https://discord.optimism.io',
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Users',
          children: [
            '/docs/users/metamask.md',
            '/docs/users/gateway.md',
            '/docs/users/supported-wallets.md'
          ],
          collapsable: false,
          sidebarDepth: 3,
        },
        {
          title: 'Developer Docs',
          children: [
             {
               title: 'Learning resourses',
               children: [
                 [
                      'https://github.com/ethereum-optimism/optimism-tutorial/tree/main/hardhat',
                      'Optimistic Ethereum with Hardhat'
                 ],
                 [
                      'https://github.com/ethereum-optimism/optimism-tutorial/tree/main/truffle',
                      'Optimistic Ethereum with Truffle'
                 ],
                 '/docs/developers/resources/talks.md',
               ]
            },
            {
              title: 'Working on Optimistic Ethereum',
              children: [
                 '/docs/developers/alone/convert.md',
                 '/docs/developers/alone/hardhat.md',
                 '/docs/developers/alone/truffle.md'                 
              ]
            },
            {
              title: 'L1 <-> L2 Integration',
              children: [
                 [ '/docs/developers/multi/erc20.md',
                   'Bridging ERC20 Tokens'
                 ],
                 [ '/docs/developers/multi/msgs.md',
                   'Passing Messages'
                 ]
              ]
            },            
          ],
          collapsable: false,
          sidebarDepth: 1,
        },
        {
          title: 'Operations',
          children: [
            '/docs/operations/create-node.md',
            '/docs/operations/monitoring.md',  
            '/docs/developers/operations/fees.md',
          ],
          collapsable: false
        },
        {
          title: 'Protocol Specs',
          children: [
            '/docs/protocol/protocol.md',
            '/docs/protocol/evm-comparison.md',
            '/docs/protocol/protocol-readings.md',
          ],
          collapsable: false,
          sidebarDepth: 1,
        }
      ],
      '/compare/': [
        {
          children: [ '' ],
          collapsable: false,
          sidebarDepth: 1,
        }
      ]
    }
  },

  plugins: [
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: 'img'
      }
    ]
  ]
}
