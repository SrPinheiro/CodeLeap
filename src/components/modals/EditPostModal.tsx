import { useTheme } from "styled-components";
import CustomModal from "src/components/modals/CustomModal";
import { Box } from "src/components/styleds/Box";
import Typography from "src/components/Typograph";
import { TextInput } from "src/components/inputs/TextInput";
import { PostType } from "src/utils/types";
import { TextAreaInput } from "src/components/inputs/TextAreaInput";
import { Button } from "src/components/styleds/Button";
import useEditPostModal from "src/hooks/components/useEditPostModal";

type props = {
    selectedPost?: PostType
    onClose: VoidFunction
    loadPosts: VoidFunction
    open: boolean
}

const EditPostModal = ({ selectedPost, open, onClose, loadPosts }: props) => {
    const theme = useTheme();
    const {
      editPost,
      handleEditPost,
      handleChangeTitle,
      handleChangeContent
    } = useEditPostModal({selectedPost, onClose, loadPosts})

    return (
      <CustomModal isOpen={open} onClose={onClose}>
        <Box
          style={{
            width: '100%',
            borderRadius: theme.spacing.md,
          }}
        >
          <Typography variant="h1">Edit item</Typography>
  
          <Typography variant="p" style={{ marginTop: theme.spacing.md }}>
            Title
          </Typography>
          <TextInput
            placeholder="Hello World"
            style={{ width: '100%' }}
            onChange={handleChangeTitle}
            value={editPost.title}
          />
  
          <Typography variant="p" style={{ marginTop: theme.spacing.md }}>
            Content
          </Typography>
          <TextAreaInput
            placeholder="Content Here"
            rows={4}
            style={{
              maxWidth: '100%',
              minWidth: '100%',
            }}
            onChange={handleChangeContent}
            value={editPost.content}
          />
  
        <Box
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1em',
                marginTop: theme.spacing.lg
            }}
            >
                <Button style={{ border: '1px solid gainsboro', backgroundColor: 'transparent', color: theme.colors.black}} onClick={onClose}>Cancel</Button>
                <Button color="success" onClick={handleEditPost}>Save</Button>
            </Box>
        </Box>
      </CustomModal>
    )
}

export default EditPostModal;
