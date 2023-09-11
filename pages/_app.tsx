import "@/styles/globals.css";
import "@/styles/theme.css";
import type { AppProps } from "next/app";
import useWindowSize from "@/components/useWindowSize";

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize();

  return (
    <div style={{ width: width }}>
      <Component {...pageProps} />
    </div>
  );
}
