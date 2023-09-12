import React from "react";
import Header from "../header";
import Container from "../container";
import useWindowSize from "../useWindowSize";
import Footer from "../footer";

type MainLayoutTypes = React.JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
  };

export default function MainLayout({ children, ...props }: MainLayoutTypes) {
  const { width } = useWindowSize();

  return (
    <div {...props} style={{ width: width }}>
      <Container style={{ paddingInline: 50 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
}
