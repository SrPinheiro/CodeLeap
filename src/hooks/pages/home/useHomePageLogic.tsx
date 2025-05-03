import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteRemovePost, getColletAllPosts, postCreateNewPost } from 'src/api/apiPost';
import { PostCreateNewPost } from 'src/utils/requestTypes';
import { PostType } from 'src/utils/types';
import { useAuth } from 'src/hooks/useAuth';

const defaultNewPost: PostCreateNewPost = {
    username: '',
    title: '',
    content: ''
}

const useHomePageLogic = () => {
  const auth = useAuth()
    const [newPost, setNewPost] = useState<PostCreateNewPost>(defaultNewPost)
    const [posts, setPosts] = useState<PostType[]>([])
    const createPostDisabled = useMemo(() => !(newPost.title && newPost.content), [newPost])
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [selectedPost, setSelectedPost] = useState<PostType>({} as PostType)

    const loadPosts = useCallback(async() => {
      try{
        const { results } = await getColletAllPosts()
        setPosts(results)
      }catch(err){
        toast('Failed to get posts!')
      }
    }, [])

    useEffect(() => {
      loadPosts()
    }, [loadPosts])

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

    const handleDeleteModalOpen = (post: PostType) => {
      setSelectedPost(post);
      setOpenDeleteModal(true)
    }

    const handleCancelDeleteModal = () => {
      setOpenDeleteModal(false)
    }
    
    const handleDeletePost = () => {
      toast.promise(
        deleteRemovePost(selectedPost!.id),
        {
          pending: 'Removing post...',
          success:  'Post removed!',
          error: 'Oh no! An error occurred while removing post!'
        }
      ).then(loadPosts)

      handleCancelDeleteModal()
    }

    const handleCloseEditModal = () => {
      setOpenEditModal(false)
    }

    const handleOpenEditModal = (post: PostType) => {
      setSelectedPost(post);
      setOpenEditModal(true)
    }

    const handleLogOutClick = () => {
      auth.logOut()
    }

    return {
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
    }
}

export default useHomePageLogic;
