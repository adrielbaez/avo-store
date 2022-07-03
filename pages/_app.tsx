import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../context/cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ChakraProvider>
  );
}

export default MyApp;
