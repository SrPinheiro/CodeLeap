import { useState } from "react";

const useShowPostContainer = () => {
    const [liked, setLiked] = useState<boolean>(false)

    const handleLikeClick = () => {
        setLiked(prev => !prev)
    }

    return {
        liked,
        handleLikeClick
    }
}

export default useShowPostContainer;
