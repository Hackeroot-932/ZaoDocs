import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold mb-4">ZaoDocs</h1>
          <p className="text-xl text-gray-600 mb-6">
            An independent, curated repository of IT knowledge dedicated to free and open source information.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">
              Get Started
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs/home">Explore Docs</Link>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 mt-8 md:mt-0">
          <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/main-image.jpg" 
              alt="ZaoDocs Illustration" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <FeatureCard 
          title="Curated IT Knowledge" 
          description="A comprehensive collection of IT research, techniques and methodologies with proper attribution to original authors." 
        />
        <FeatureCard 
          title="Clarity & Precision" 
          description="Content prioritizes clarity, accuracy, and practical utility for both professionals and enthusiasts." 
        />
        <FeatureCard 
          title="Open Source" 
          description="While maintained by a single individual, ZaoDocs welcomes contributions and improvements from the community." 
        />
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
