import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
  body {
      background: ${themes.light.backgroundColor};

      /* change according to system dark mode */
      @media (prefers-color-scheme: dark) {
          background: ${themes.dark.backgroundColor};
      }
  }
`
