import "@/styles/globals.css";
import "@/styles/theme.css";
import type { AppProps } from "next/app";
import useWindowSize from "@/components/useWindowSize";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  const { width, height } = useWindowSize();
  const Width = width - width / 10;
  return (
    <div style={{ width: width }}>
      <div
        style={{
          minHeight: height,
          width: Width,
        }}
        className="container"
      >
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
