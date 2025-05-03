import { CenterAlignContainer } from 'src/components/styleds/CenterAlignContainer';
import DeleteModal from 'src/components/modals/DeleteModal';
import EditPostModal from 'src/components/modals/EditPostModal';
import { FlexContainer } from 'src/components/styleds/FlexContainer';
import { HeaderContainer } from 'src/components/styleds/HeaderContainer';
import NewPostContainer from 'src/components/NewPostContainer';
import ShowPostContainer from 'src/components/ShowPostContainer';
import Typography from 'src/components/Typograph';
import { useTheme } from 'styled-components';
import { useHomePage } from 'src/hooks/pages/home/useHomePage';
import { MdOutlineLogout } from "react-icons/md";
import IconButton from 'src/components/IconButton';

const HomePageView = () => {
        const theme = useTheme()
        const {
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
            loadPosts,
            handleLogOutClick
          } = useHomePage()
    
        return (
            <CenterAlignContainer>
                <FlexContainer style={{ minHeight: '100%', padding: 0}}>
                    <HeaderContainer style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant='h1'>Home Page</Typography>
                        <IconButton onClick={handleLogOutClick}>
                            <MdOutlineLogout size={20} />
                        </IconButton>
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
