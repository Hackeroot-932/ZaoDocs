import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, NetworkIcon, HouseIcon, ServerCogIcon, ShieldHalfIcon, BrainCogIcon, GlobeIcon, LayoutTemplateIcon, BugIcon, Grid2x2Icon } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <img
          src="https://icons.iconarchive.com/icons/wilnichols/alumin-folders/256/Developer-Purple-Folder-icon.png"
          width="32"
          height="32"
          alt="ZaoDocs Icon"
          className="mr-1"
        />
        <span>ZaoDocs</span>
      </div>
    ),
  },
  links: [
    {
      type: 'menu',
      text: 'Docs',
      icon: <BookIcon />,
      items: [
        {
          text: 'Home',
          description: 'Welcome Page of ZaoDocs',
          url: '/docs/home',
          icon: <HouseIcon />,
        },
        {
          text: 'How Computers Work',
          description: 'Guide of the functioning of computers',
          url: '/docs/how-computers-work',
          icon: <ServerCogIcon />,
        },
        {
          text: 'Networking',
          description: 'All CCNA Networking knowledge explained',
          url: '/docs/networking',
          icon: <NetworkIcon />,
        },
        {
          text: 'IT Security',
          description: 'Knowledge about Computer Security (CompTIA S+)',
          url: '/docs/it-sec',
          icon: <ShieldHalfIcon />,
        },
        {
          text: 'Windows',
          description: 'The Windows Bible',
          url: '/docs/windows',
          icon: <Grid2x2Icon />,
        },
        {
          text: 'Linux',
          description: 'The Goat Explained',
          url: '/docs/linux',
          icon: <BrainCogIcon />,
        },
        {
          text: 'The Art of Pentesting',
          description: 'The Pentesting Basics Explained',
          url: '/docs/the-art-of-pentesting',
          icon: <BugIcon />,
        },
        {
          text: 'Pentesting Networks',
          description: 'Pentesting Networks',
          url: '/docs/pentesting-networks',
          icon: <GlobeIcon />,
        },
        {
          text: 'Web Hacking',
          description: 'OWASP Top 10, Web Vulns, ...',
          url: '/docs/web-hacking',
          icon: <LayoutTemplateIcon />,
        },
      ],
    },
  ],
};