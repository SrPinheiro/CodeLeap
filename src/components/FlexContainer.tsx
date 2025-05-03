import styled from "styled-components";

export const FlexContainer = styled.div`
    background-color: ${({ theme }) =>  theme.colors.white};
    padding: ${({ theme }) => theme.spacing.md};
    display: flex;
    flex-direction: column;
    min-height: 1em;
`
