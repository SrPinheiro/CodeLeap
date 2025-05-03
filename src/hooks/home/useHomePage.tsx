import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { getColletAllPosts, postCreateNewPost } from "src/api/apiPost";
import { PostCreateNewPost } from "src/utils/requestTypes";
import { PostType } from "src/utils/types";
import { useAuth } from "../useAuth";

const defaultNewPost: PostCreateNewPost = {
    username: '',
    title: '',
    content: ''
}

const useHomePage = () => {
  const auth = useAuth()
    const [newPost, setNewPost] = useState<PostCreateNewPost>(defaultNewPost)
    const [posts, setPosts] = useState<PostType[]>([])
    const createPostDisabled = useMemo(() => !(newPost.title && newPost.content), [newPost])
    
    useEffect(() => {
      const handleGetPosts = async() => {
        try{
          const { results } = await getColletAllPosts()
          setPosts(results)
        }catch(err){
          toast('Failed to get posts!')
        }
      }

      handleGetPosts()
    }, [])

    const handleUpdateNewPostTitle = ({target: { value }}: ChangeEvent<HTMLInputElement>) => {
        setNewPost(prev => ({...prev, title: value}))
    }

    const handleUpdateNewPostContent = ({target: { value }}: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(prev => ({...prev, content: value}))
    }

    const handleSubmitPost = () => {
      const dataToSend = {...newPost, username: auth.username}
      toast.promise(
        postCreateNewPost(dataToSend),
        {
          pending: 'Sending post...',
          success:  'Post created!',
          error: 'Oh no! An error occurred while creating post!'
        }
      ).then((post) => {
        setNewPost(defaultNewPost)
        setPosts(prev => ([...prev, post]))
      })
    }

    return {
        newPost,
        handleUpdateNewPostTitle,
        handleUpdateNewPostContent,
        handleSubmitPost,
        createPostDisabled,
        posts
    }
}

export default useHomePage;
