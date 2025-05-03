import { getAxios } from "src/configs/axios"
import { ArrayResponseType, PathEditPost, PostCreateNewPost } from "src/utils/requestTypes"
import { PostType } from "src/utils/types"

const postCreateNewPost = async(data: PostCreateNewPost)  => {
    const reponse = await getAxios().post<PostType>('', data)

    return reponse.data
}

const getColletAllPosts = async()  => {
    const reponse = await getAxios().get<ArrayResponseType<PostType>>('')

    return reponse.data
}

const patchUpdatePost = async(postID: number, data: PathEditPost)  => {
    const reponse = await getAxios().patch<PostType>(`/${postID}/`, data)

    return reponse.data
}

const deleteRemovePost = async(postID: number) => {
    const reponse = await getAxios().delete<void>(`/${postID}/`)

    return reponse.data
}

export {
    postCreateNewPost,
    getColletAllPosts,
    patchUpdatePost,
    deleteRemovePost
}
