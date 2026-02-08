"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ActivateContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice && token) {
      window.location.href = `critterapp://activate/${token}/${email}`;
    }
  }, [token, email]);

  return (
    <div className="min-h-screen bg-critter-beige flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-title text-3xl text-critter-maroon mb-4">
          Activating your account...
        </h1>
        <p className="font-body text-critter-gray">
          If you&apos;re on a mobile device, the Critter app should open automatically. If not, please open the Critter app manually.
        </p>
      </div>
    </div>
  );
}

export default function ActivatePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-critter-beige flex items-center justify-center">
        <p className="font-body text-critter-gray">Loading...</p>
      </div>
    }>
      <ActivateContent />
    </Suspense>
  );
}
