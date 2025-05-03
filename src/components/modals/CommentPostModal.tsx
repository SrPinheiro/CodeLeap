import CustomModal from "src/components/modals/CustomModal";
import Typography from "src/components/Typograph";
import { TextAreaInput } from "src/components/inputs/TextAreaInput";
import { FaPaperPlane } from "react-icons/fa";
import {
  CommentList,
  Container,
  InputFooter,
  SendButton,
  StyledCommentItem
} from "src/components/styleds/CommentPostComponents";
import { useTheme } from "styled-components";
import useCommentPostModal from "src/hooks/components/useCommentPostModal";

type props = {
  isOpen: boolean;
  onClose: () => void;
};

const CommentPostModal = ({ isOpen, onClose }: props) => {
  const theme = useTheme()
  const { currentComment, comments, handleSendComment, handleInputComment } = useCommentPostModal()
  
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} style={{ maxWidth: "none", height: '90%' }}>
      <Container style={{ height: "100%", justifyContent: "space-between" }}>
        <Typography variant="h2">Comments</Typography>

        <CommentList style={{ flex: 1, overflowY: "auto" }}>
          {comments.map((c, index) => (
            <StyledCommentItem key={index} style={{marginTop: theme.spacing.sm}}>
              <Typography variant="span">{c.author}</Typography>
              <Typography variant="p" style={{marginTop: theme.spacing.sm}}>{c.text}</Typography>
            </StyledCommentItem>
          ))}
        </CommentList>

        <InputFooter>
          <TextAreaInput
            placeholder="Nice post!"
            value={currentComment}
            style={{ width: '100%'}}
            onChange={handleInputComment}
          />
          <SendButton onClick={handleSendComment} style={{ width: '100%'}}>
            <FaPaperPlane size={15}/>
          </SendButton>
        </InputFooter>
      </Container>
    </CustomModal>
  );
};

export default CommentPostModal;
