import "@/styles/theme.css";
import "@/styles/button.css";
import "@/styles/globals.css";
import "@/styles/alert.css";
import "@/styles/button-group.css";
import "@/styles/checkbox.css";
import "@/styles/rating.css";
import "@/styles/navbar.css";
import "@/styles/components.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout.Main>
      <Component {...pageProps} />
    </Layout.Main>
  );
}
