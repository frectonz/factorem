import Nav from "./Nav";
import Head from "next/head";
import Menu from "./Menu";
import { ReactNode, useState } from "react";
import { Footer } from "./Footer";

type Props = {
  title?: string;
  showInsideMain?: boolean;
  homePage?: boolean;
  children?: ReactNode;
};

export function Layout({
  children,
  title = "Factorem",
  homePage = false,
  showInsideMain = true,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{homePage ? "Factorem" : `Factorem | ${title}`}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.ico" />
        <meta
          name="description"
          content="Fraol Lemecha's blog about tech and other interesting stuff."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@FraolLemecha" />
        <meta name="twitter:creator" content="@FraolLemecha" />
        <meta property="og:url" content="https://factorem.vercel.app/" />
        <meta property="og:title" content="Factorem" />
        <meta
          property="og:description"
          content="Fraol Lemecha's blog about tech and other interesting stuff."
        />
        <meta
          property="og:image"
          content="https://factorem.vercel.app/logo.png"
        />
      </Head>

      <Nav onHamburgerClick={() => setMenuOpen(true)} />
      <Menu menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />

      {showInsideMain ? (
        <main className="main">{children}</main>
      ) : (
        <>{children}</>
      )}

      <Footer />
    </>
  );
}
