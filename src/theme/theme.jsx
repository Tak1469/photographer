import { css } from "styled-components";

export const theme = {
  fonts: {
    mainFont: "'Montserrat', sans-serif",
    subFont: "Noto Sans JP', sans-serif",
  },
  colors: {
    mainColor: "#EEEEEE",
    textColor: "#393E46",
    backgroundColor: "#F7F7F7",
    accentColor: "#141E61",
    stageColor: "#929AAB",
    mainFont: "#454545",
    modalBackgroundColor: "rgba(126, 126, 126, 0.711)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.625rem",
  },
  media: {
    sm: (...args) => css`
      @media (max-width: 414px) {
        ${css(...args)}
      }
    `,
    md: (...args) => css`
      @media (max-width: 768px) {
        ${css(...args)}
      }
    `,
    lg: (...args) => css`
      @media (max-width: 1200px) {
        ${css(...args)}
      }
    `,
  },
}