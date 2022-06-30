import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          as="font"
        />
      </Head>
      <body
        style={{
          backgroundColor: "#E5E5E5",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
