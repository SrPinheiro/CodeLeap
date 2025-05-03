import { Theme } from "src/configs/themeConfig";
import styled from "styled-components";

export const Button = styled.button<{color?: keyof Theme['colors'], disabled?: boolean}>`
    padding: ${({ theme }) => theme.spacing.sm } ${({ theme }) => theme.spacing.md };
    border-radius: ${({ theme }) => theme.spacing.sm };
    background-color: ${({ theme, color, disabled }) => theme.colors[disabled ? 'gray' : color ?? 'primary']};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: all 300ms;

    &:hover {
        background-color: ${({ theme, color, disabled }) => theme.colors[disabled ? 'gray' : color ?? 'secondary']} ;
    }
`