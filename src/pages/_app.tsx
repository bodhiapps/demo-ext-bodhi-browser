import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ExtensionProvider } from "@/components/extension/ExtensionProvider";
import { ErrorBoundary } from "@/components/ui/error-boundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ExtensionProvider>
        <Component {...pageProps} />
      </ExtensionProvider>
    </ErrorBoundary>
  );
}
