import { defineConfig } from 'vitepress';

export default defineConfig({
  // This keeps the site under the /blockemon/ subpath
  base: '/blockemon/', 
  
  title: 'BlockéMon - Wiki',
  description: 'Official Expedition Guide for BlockéMon Frontier',
  lang: 'eng',
  
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // Correctly points to your actual home folder
    logoLink: '/blockemon/eng/', 

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/y95wNdaeXZ' },
      { icon: 'github', link: 'https://github.com/ToxicCookie96/BlockeMon-wiki' }
    ],

    nav: [
      // Points to docs/eng/index.md
      { text: 'Home', link: '/eng/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          // All links now correctly reference the 'eng' subfolder
          { text: 'Home', link: '/eng/' },
          { text: 'Rules', link: '/eng/rules' },
          { text: 'Installation', link: '/eng/installation' },
          { text: 'Connection', link: '/eng/connection' },
        ]
      }
    ]
  }
});