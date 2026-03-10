import { defineConfig } from 'vitepress';

export default defineConfig({
  // FIX: This must match your repo name: BlockeMon-wiki
  base: '/BlockeMon-wiki/', 
  
  title: 'BlockéMon - Wiki',
  description: 'Official Expedition Guide for BlockéMon Frontier',
  lang: 'eng',
  
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // logoLink should generally point to the root of your site
    logoLink: '/', 

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/y95wNdaeXZ' },
      { icon: 'github', link: 'https://github.com/ToxicCookie96/BlockeMon-wiki' }
    ],

    nav: [
      { text: 'Home', link: '/eng/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Home', link: '/eng/' },
          { text: 'Rules', link: '/eng/rules' },
          { text: 'Installation', link: '/eng/installation' },
          { text: 'Connection', link: '/eng/connection' },
        ]
      }
    ]
  }
});