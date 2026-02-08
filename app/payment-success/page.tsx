import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";

export const metadata = {
  title: "Payment Complete | Critter",
};

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-critter-beige flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="font-title text-3xl text-critter-maroon mb-4">
          Payment Complete
        </h1>
        <p className="font-body text-critter-gray mb-8">
          Your payment has been processed successfully. Thank you for choosing Critter!
        </p>
        <Link href="/">
          <Button className="bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
