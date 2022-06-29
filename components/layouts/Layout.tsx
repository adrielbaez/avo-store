import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
  children: JSX.Element;
  title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Avo - Store"}</title>
        <meta name="author" content="Adriel Baez" />
        <meta name="description" content="Avocado store" />
        <meta name="keywords" content={`${title}, avocado`} />
      </Head>
      <Navbar />

      <main
        style={{
          padding: "0px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {children}
      </main>
    </>
  );
};
