import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    html, body {
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.background };
        color: ${({ theme }) => theme.colors.black };
        font-family: ${({ theme }) => theme.font.family};
    }

    h1 {
        font-size: ${({ theme }) => theme.font.size.lg };
        font-weight: 700;
    }
    

    h2 {
        font-size: ${({ theme }) => theme.font.size.md };
        font-weight: 400;
    }

    h3 {
        font-size: ${({ theme }) => theme.font.size.sm };
    }

    p {
        font-weight: 400;
        font-size: 16px;
    }

    span {
        font-size: ${({ theme }) => theme.font.size.md };
        color: ${({ theme }) => theme.colors.gray };
        font-weight: 700;
    }
`;