import { useTheme } from "styled-components";
import CustomModal from "src/components/CustomModal";
import { Box } from "src/components/Box";
import Typography from "src/components/Typograph";
import { TextInput } from "src/components/TextInput";
import { PostType } from "src/utils/types";
import { useLayoutEffect, useState } from "react";
import { TextAreaInput } from "src/components/TextAreaInput";
import { Button } from "src/components/Button";
import { toast } from "react-toastify";
import { patchUpdatePost } from "src/api/apiPost";

type props = {
    selectedPost?: PostType
    onClose: VoidFunction
    loadPosts: VoidFunction
    open: boolean
}

const EditPostModal = ({selectedPost, open, onClose, loadPosts}: props) => {
    const [editPost, setEditPost] = useState({title: '', content: '' })
    const theme = useTheme();

    useLayoutEffect(() => {
        setEditPost({
            title: selectedPost?.title ?? '',
            content: selectedPost?.content ?? ''
        })
    }, [selectedPost])

    const handleEditPost = () => {
        onClose()
        toast.promise(
            patchUpdatePost(selectedPost!.id, editPost),
            {
                pending: 'Updating post...',
                success: 'Post updated!',
                error: 'Oh no! An error occurred while updating post!'
            }
        ).then(loadPosts)
    }

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
            onChange={e =>setEditPost(prev => ({...prev, title: e.target.value}))}
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
            onChange={e =>setEditPost(prev => ({...prev, content: e.target.value}))}
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
