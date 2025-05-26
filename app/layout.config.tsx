import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, NetworkIcon, HouseIcon, ServerCogIcon, ShieldHalfIcon, BrainCogIcon, GlobeIcon, LayoutTemplateIcon, BugIcon, CodeIcon } from 'lucide-react';

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
          description: 'Computers Fundamentals',
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
          description: 'Knowledge about Computer Security (CISSP)',
          url: '/docs/it-sec',
          icon: <ShieldHalfIcon />,
        },
        {
          text: 'Programming',
          description: 'Programming Languages',
          url: '/docs/programming',
          icon: <CodeIcon />,
        },
        {
          text: 'Operating Systems',
          description: 'Linux, Windows, ...',
          url: '/docs/operating-systems',
          icon: <BrainCogIcon />,
        },
        {
          text: 'The Art of Hacking',
          description: 'The Pentesting Basics Explained',
          url: '/docs/the-art-of-hacking',
          icon: <BugIcon />,
        },
        {
          text: 'Networks Hacking',
          description: 'Networks Hacking',
          url: '/docs/networks-hacking',
          icon: <GlobeIcon />,
        },
        {
          text: 'Web Hacking',
          description: 'OWASP Top 10, Web Vulns, ...',
          url: '/docs/hacking-web',
          icon: <LayoutTemplateIcon />,
        },
      ],
    },
  ],
};