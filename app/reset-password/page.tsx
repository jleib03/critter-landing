"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  useEffect(() => {
    if (token) {
      window.location.href = `critterapp://reset-password/${token}`;
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-critter-beige flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-title text-3xl text-critter-maroon mb-4">
          Resetting your password...
        </h1>
        <p className="font-body text-critter-gray">
          The Critter app should open automatically to complete your password reset. If not, please open the app manually.
        </p>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-critter-beige flex items-center justify-center">
        <p className="font-body text-critter-gray">Loading...</p>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
