import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      Blue: "hsl(246, 80%, 60%)",

      VeryDarkBlue: "hsl(226, 43%, 10%)",
      DarkBlue: "hsl(235, 46%, 20%)",
      DesaturatedBlue: "hsl(235, 45%, 61%)",
      PaleBlue: "hsl(236, 100%, 87%)",
    },
  },
});
export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontSize: 18,
    fontFamily: "Rubik, sans-serif",
    backgroundColor: "$VeryDarkBlue",
  },
});
