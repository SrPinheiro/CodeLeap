import { Box } from 'src/components/styleds/Box';
import { useTheme } from 'styled-components';
import Typography from 'src/components/Typograph';
import { TextInput } from 'src/components/inputs/TextInput';
import { Button } from 'src/components/styleds/Button';
import { TextAreaInput } from 'src/components/inputs/TextAreaInput';
import { ChangeEventHandler } from 'react';
import { PostCreateNewPost } from 'src/utils/requestTypes';

type props = {
    handleUpdateNewPostTitle: ChangeEventHandler<HTMLInputElement>
    handleUpdateNewPostContent: ChangeEventHandler<HTMLTextAreaElement>
    handleSubmitPost: () => void
    createPostDisabled: boolean
    newPost: PostCreateNewPost
}

const NewPostContainer = ({
    handleUpdateNewPostTitle,
    handleUpdateNewPostContent,
    handleSubmitPost,
    createPostDisabled,
    newPost
    }: props) => {
    const theme = useTheme()

    return (
        <Box
            style={{
                width: '100%',
                border: `1px solid ${theme.colors.gray}`,
                borderRadius: theme.spacing.md,
                padding: theme.spacing.lg
            }}
        >
            <Typography variant='h1'>What’s on your mind?</Typography>
            <Typography variant='p' style={{marginTop: theme.spacing.md}} >title</Typography>
            <TextInput
            placeholder='Hello Word'
            style={{ width: '100%'}}
            onChange={handleUpdateNewPostTitle}
            value={newPost.title}
            />
            <Typography variant='p' style={{marginTop: theme.spacing.md}}>Content</Typography>
            <TextAreaInput
            placeholder='Content Here'
            style={{ maxWidth: '100%', minWidth: '100%'}}
            rows={4} 
            onChange={handleUpdateNewPostContent}
            value={newPost.content}
            />
            <Box
            style={{
                marginTop: theme.spacing.lg,
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
            }}>
                <Button
                type='button'
                disabled={createPostDisabled}
                onClick={handleSubmitPost}
                >Create</Button>
            </Box>
        </Box>
    )
}

export default NewPostContainer;
