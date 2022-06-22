import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "100": "#FFAB2E",
    },
  },
  fonts: {
    heading: "Sf-Regular",
    body: "Sf-Regular",
  },
  styles: {
    global: {
      "html, body": {
        background: "#fff",
        overflowX: "hidden",
        overflowY: "hidden",
      },
    },
  },
});
