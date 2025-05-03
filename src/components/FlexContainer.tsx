import styled from "styled-components";

export const FlexContainer = styled.div`
    background-color: ${({ theme }) =>  theme.colors.white};
    padding: ${({ theme }) => theme.spacing.lg};
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (orientation: portrait ) {
        width: 100%;
    }
`
