import {createGlobalStyle} from "styled-components";
import {FONT_FAMILY, FONT_SIZE_BODY, WHITE} from "@/styles/StyleConstants";

export const Base = createGlobalStyle`
  body {
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE_BODY};
    background-color: ${p => {
      console.log(p?.theme)
      return p?.theme?.bodyBackground || WHITE
    }};

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: inherit;
      color: inherit;
    }

    p, figure {
      margin: 0;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      list-style-type: none;
    }

    input {
      padding: 0;
    }

    table th {
      padding: 0;
      text-align: center;
    }

    * {
      -webkit-overflow-scrolling: touch;
    }
  }
`