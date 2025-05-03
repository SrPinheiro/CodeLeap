import { ChangeEventHandler } from "react";
import { CenterAlignContainer } from "src/components/CenterAlignContainer";
import { FlexContainer } from "src/components/FlexContainer";
import { HeaderContainer } from "src/components/HeaderContainer";
import NewPostContainer from "src/components/NewPostContainer";
import ShowPostContainer from "src/components/ShowPostContainer";
import Typography from "src/components/Typograph";
import { PostCreateNewPost } from "src/utils/requestTypes";
import { PostType } from "src/utils/types";
import { useTheme } from "styled-components";

type props = {
  newPost: PostCreateNewPost
  handleUpdateNewPostTitle: ChangeEventHandler<HTMLInputElement>
  handleUpdateNewPostContent: ChangeEventHandler<HTMLTextAreaElement>
  handleSubmitPost: () => void
  posts: PostType[]
  createPostDisabled: boolean
}

const HomePageView = ({
    newPost,
    handleUpdateNewPostTitle,
    handleUpdateNewPostContent,
    handleSubmitPost,
    createPostDisabled,
    posts
  }: props) => {
      const theme = useTheme()

    return (
        <CenterAlignContainer>
            <FlexContainer style={{ minHeight: '100%', padding: 0}}>
                <HeaderContainer>
                    <Typography variant="h1">Home Page</Typography>
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
                            key={post.id}
                            />
                        ))
                    }
                </FlexContainer>
            </FlexContainer>
        </CenterAlignContainer>
    )
}

export default HomePageView;
