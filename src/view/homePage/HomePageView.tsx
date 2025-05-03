import { ChangeEventHandler } from 'react';
import { CenterAlignContainer } from 'src/components/CenterAlignContainer';
import DeleteModal from 'src/components/DeleteModal';
import EditPostModal from 'src/components/EditPostModal';
import { FlexContainer } from 'src/components/FlexContainer';
import { HeaderContainer } from 'src/components/HeaderContainer';
import NewPostContainer from 'src/components/NewPostContainer';
import ShowPostContainer from 'src/components/ShowPostContainer';
import Typography from 'src/components/Typograph';
import { PostCreateNewPost } from 'src/utils/requestTypes';
import { PostType } from 'src/utils/types';
import { useTheme } from 'styled-components';

type props = {
  newPost: PostCreateNewPost
  handleUpdateNewPostTitle: ChangeEventHandler<HTMLInputElement>
  handleUpdateNewPostContent: ChangeEventHandler<HTMLTextAreaElement>
  handleSubmitPost: VoidFunction
  posts: PostType[]
  createPostDisabled: boolean
  openDeleteModal: boolean
  openEditModal: boolean
  handleDeleteModalOpen: (value: PostType) => void
  handleOpenEditModal: (value: PostType) => void
  handleCancelDeleteModal: VoidFunction
  handleDeletePost: VoidFunction
  handleCloseEditModal: VoidFunction
  selectedPost: PostType
  loadPosts: VoidFunction
}

const HomePageView = ({
    newPost,
    handleUpdateNewPostTitle,
    handleUpdateNewPostContent,
    handleSubmitPost,
    createPostDisabled,
    posts,
    openDeleteModal,
    handleDeleteModalOpen,
    handleCancelDeleteModal,
    handleDeletePost,
    openEditModal,
    handleCloseEditModal,
    handleOpenEditModal,
    selectedPost,
    loadPosts
  }: props) => {
        const theme = useTheme()
    
        return (
            <CenterAlignContainer>
                <FlexContainer style={{ minHeight: '100%', padding: 0}}>
                    <HeaderContainer>
                        <Typography variant='h1'>Home Page</Typography>
                    </HeaderContainer>
                    <FlexContainer style={{ alignItems: 'center', width: '100%'}}>
                        <NewPostContainer
                            newPost={newPost}
                            handleUpdateNewPostTitle={handleUpdateNewPostTitle}
                            handleUpdateNewPostContent={handleUpdateNewPostContent}
                            createPostDisabled={createPostDisabled}
                            handleSubmitPost={handleSubmitPost}
                        />
                        {
                            posts.map((post) => (
                                <ShowPostContainer
                                style={{ marginTop: theme.spacing.lg}}
                                post={post}
                                onDeleteClick={handleDeleteModalOpen}
                                onEditClick={handleOpenEditModal}
                                key={post.id}
                                />
                            ))
                        }
                    </FlexContainer>
                    <DeleteModal isOpen={openDeleteModal} onCancel={handleCancelDeleteModal} onConfirm={handleDeletePost}/>
                    <EditPostModal open={openEditModal} onClose={handleCloseEditModal} selectedPost={selectedPost} loadPosts={loadPosts}/>
                </FlexContainer>
            </CenterAlignContainer>
        )
}

export default HomePageView;
