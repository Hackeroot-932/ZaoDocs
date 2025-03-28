import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { Analytics } from "@vercel/analytics/react"

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout className="bg-background text-foreground min-h-screen" {...baseOptions}>
      {children}
    </HomeLayout>
  );
}