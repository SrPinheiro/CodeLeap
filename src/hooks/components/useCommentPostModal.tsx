import { ChangeEvent, useState } from "react";
import { useAuth } from "src/hooks/useAuth";

type CommentData = {
    author: string;
    text: string;
};

const useCommentPostModal = () => {
    const [currentComment, setCurrentComment] = useState<string>("");
    const [comments, setComments] = useState<CommentData[]>([]);
    const auth = useAuth()

    const handleSendComment = () => {
        if (!currentComment) return

        setComments([...comments, { text: currentComment, author: auth.username }]);
        setCurrentComment("");
    };

    const handleInputComment = ({ target: { value }}: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentComment(value)
    }

    return {
        currentComment,
        comments,
        handleSendComment,
        handleInputComment
    }
}

export default useCommentPostModal;
