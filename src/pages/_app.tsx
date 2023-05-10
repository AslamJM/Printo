import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const path = usePathname();

  const isPublic = ["/", "/services", "/showcase", "/order"].includes(path);
  return (
    <ClerkProvider {...pageProps}>
      {isPublic && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      {!isPublic && (
        <>
          <SignedIn>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}
