import "@/styles/theme.css";
import "@/styles/button.css";
import "@/styles/globals.css";
import "@/styles/blockquote.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout.Main>
      <Component {...pageProps} />
    </Layout.Main>
  );
}
