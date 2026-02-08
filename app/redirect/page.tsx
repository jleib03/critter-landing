"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    window.location.href = "critterapp://";
  }, []);

  return (
    <div className="min-h-screen bg-critter-beige flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-title text-3xl text-critter-maroon mb-4">
          Redirecting to Critter...
        </h1>
        <p className="font-body text-critter-gray">
          The Critter app should open automatically. If not, please open the app manually.
        </p>
      </div>
    </div>
  );
}
