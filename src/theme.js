import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: { initialColorMode: "dark", useSystemColorMode: true },
  styles: {
    global: {
      fontFamily:
        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
    },
    body: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  },
};

export default extendTheme(theme);
