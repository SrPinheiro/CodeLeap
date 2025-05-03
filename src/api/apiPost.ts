import { getAxios } from "src/configs/axios"
import { ArrayResponseType, PostCreateNewPost } from "src/utils/requestTypes"
import { PostType } from "src/utils/types"

const postCreateNewPost = async(data: PostCreateNewPost)  => {
    const reponse = await getAxios().post<PostType>('', data)

    return reponse.data
}

const getColletAllPosts = async()  => {
    const reponse = await getAxios().get<ArrayResponseType<PostType>>('')

    return reponse.data
}

export {
    postCreateNewPost,
    getColletAllPosts
}
