import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary };
    padding: ${({ theme }) => theme.spacing.lg };
    width: 100%;
    color: ${({ theme }) => theme.colors.white }
`