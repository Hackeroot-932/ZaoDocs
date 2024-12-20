import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Fumadocs + Shadcn UI</h1>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Button>Button from Shadcn UI</Button>
        <Button variant="secondary" asChild>
          <Link href="/docs">Open Docs</Link>
        </Button>
      </div>
    </main>
  );
}
