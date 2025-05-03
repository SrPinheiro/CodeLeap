import { ChangeEventHandler, createContext, JSX } from "react";
import useHomePageLogic from "src/hooks/pages/home/useHomePageLogic";
import { PostCreateNewPost } from "src/utils/requestTypes";
import { PostType } from "src/utils/types";

export type HomePageContextType = {
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
    handleLogOutClick: VoidFunction
}

export const HomePageContext = createContext<HomePageContextType>({} as HomePageContextType)

type props = {
    children: JSX.Element
}

export const HomePageProvider = ({ children }: props) => {
    const value = useHomePageLogic()

    return (
        <HomePageContext.Provider value={value}>
            {children}
        </HomePageContext.Provider>
    )
}
