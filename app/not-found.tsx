import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-critter-beige flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-critter-cream flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-title text-critter-gray">404</span>
        </div>
        <h1 className="font-title text-3xl text-critter-maroon mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-critter-gray mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
              Go Home
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button variant="outline" className="font-subtitle">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
