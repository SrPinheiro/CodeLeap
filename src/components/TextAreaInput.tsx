import styled from "styled-components";

export const TextAreaInput = styled.textarea`
    padding: ${({ theme }) => theme.spacing.sm };
    border-radius: ${({ theme }) => theme.spacing.sm };
    border: 1px solid ${({ theme }) => theme.colors.gray };

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px rgba(100, 100, 100, 0.2);
    }
`