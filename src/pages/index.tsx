import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { AuthCard } from "@/components/extension/AuthCard";
import { useExtensionContext } from "@/components/extension/ExtensionProvider";
import { ExtensionStatus } from "@/components/extension/ExtensionStatus";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { getLandingError } from "@/lib/landing-error-storage";

function AppContent() {
  const { extension, auth } = useExtensionContext();
  const [landingError, setLandingError] = useState<string | null>(null);

  // Check for stored error message on component mount
  useEffect(() => {
    const errorMessage = getLandingError();
    if (errorMessage) {
      setLandingError(errorMessage);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-8 py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-800">
            Bodhi Extension Demo
          </h1>
          <p className="text-lg text-gray-600">
            Connect with the Bodhi browser extension for AI capabilities
          </p>
        </div>

        {/* Landing Page Error Notification */}
        {landingError && (
          <div className="mb-8">
            <Alert variant="destructive" className="relative">
              <AlertTitle>Authentication Error</AlertTitle>
              <AlertDescription>{landingError}</AlertDescription>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-2 h-6 w-6 p-0"
                onClick={() => setLandingError(null)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </Alert>
          </div>
        )}

        {/* Main Content - Consistent layout for both states */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Extension Status Card - Always visible */}
          <ExtensionStatus />

          {/* Authentication Card - Unified component handles all auth states */}
          <AuthCard />
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            {extension.client && auth.isAuthenticated
              ? "You are successfully connected to the Bodhi extension and authenticated!"
              : "Connect the extension and authenticate to access AI capabilities"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return <AppContent />;
}
