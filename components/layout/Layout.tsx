import { ReactNode } from "react";

// Components
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
