import { ChangeEventHandler, useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { patchUpdatePost } from "src/api/apiPost";
import { PostType } from "src/utils/types";

type props = {
    selectedPost?: PostType
    onClose: VoidFunction
    loadPosts: VoidFunction
    open: boolean
}

const useEditPostModal = ({ selectedPost, onClose, loadPosts, open }: props) => {
    const [editPost, setEditPost] = useState({title: '', content: '' })

    useLayoutEffect(() => {
            setEditPost({
                title: selectedPost?.title ?? '',
                content: selectedPost?.content ?? ''
            })
        
        }, [selectedPost, open]) // eslint-disable-line

    const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
        setEditPost(prev => ({...prev, title: e.target.value}))
    }

    const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setEditPost(prev => ({...prev, content: e.target.value}))
    }

    const handleSubmitForm = () => {
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

    return {
        editPost,
        handleSubmitForm,
        handleChangeTitle,
        handleChangeContent
    }
}

export default useEditPostModal;
