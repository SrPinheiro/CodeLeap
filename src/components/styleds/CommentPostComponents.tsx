import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({theme}) => theme.spacing.md};
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Comment = styled.li`
  background: #f1f1f1;
  padding: ${({theme}) => theme.spacing.sm};
  margin-top: 4px;
  border-radius: 4px;
`;

const StyledCommentItem = styled.li`
  background: #f9f9f9;
  padding: 10px 12px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

const InputFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.sm};
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.spacing.md };
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary };
  color: ${({ theme }) => theme.colors.white };
  border: none;
  border-radius: ${({ theme }) => theme.spacing.sm };
  padding: ${({ theme }) => theme.spacing.md };
  height: ${({ theme }) => theme.spacing.lg };
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary };
  }
`;

export {
    Container,
    CommentList,
    Comment,
    StyledCommentItem,
    InputFooter,
    SendButton
}