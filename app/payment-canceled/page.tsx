import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { X } from "lucide-react";

export const metadata = {
  title: "Payment Canceled | Critter",
};

export default function PaymentCanceledPage() {
  return (
    <div className="min-h-screen bg-critter-beige flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-critter-cream flex items-center justify-center mx-auto mb-6">
          <X className="h-10 w-10 text-critter-gray" />
        </div>
        <h1 className="font-title text-3xl text-critter-maroon mb-4">
          Payment Canceled
        </h1>
        <p className="font-body text-critter-gray mb-8">
          Your payment was not processed. If this was a mistake, you can try again or contact us for help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/pricing">
            <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
              View Pricing
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button variant="outline" className="font-subtitle">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
