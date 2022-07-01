import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../server/route/app.router";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { url } from "../constants";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withTRPC<AppRouter>({
  config() {
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ];

    return {
      links,
    };
  },
  ssr: true,
})(MyApp);
