import styled from "styled-components";
import { Box } from "src/components/Box";

export const CircleBox = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;