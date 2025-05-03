import { CSSProperties, useTheme } from 'styled-components';
import { Box } from 'src/components/styleds/Box';
import Typography from 'src/components/Typograph';
import { PostType } from 'src/utils/types';
import { getTimeAgoFormated } from 'src/utils/stringHelpers';
import ShowPostContainerHeader from 'src/components/ShowPostContainerHeader';
import IconButton from 'src/components/IconButton';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import useShowPostContainer from 'src/hooks/components/useShowPostContainer';
import CommentPostModal from 'src/components/modals/CommentPostModal';
import { useState } from 'react';
type props = {
    post: PostType
    style?: CSSProperties
    onDeleteClick: (value: PostType) => void
    onEditClick: (value: PostType) => void
}

const ShowPostContainer = ({ post, style, onDeleteClick, onEditClick }: props) => {
    const theme = useTheme()
    const { title, content, username, created_datetime } = post

    const { liked, handleLikeClick} = useShowPostContainer()
    const [open, setOpen] = useState(false)

    return (
        <Box
            style={{
                width: '100%',
                border: `1px solid ${theme.colors.gray}`,
                borderRadius: '16px',
                minWidth: '300px',
                ...style
            }}
        >
            <ShowPostContainerHeader
                post={post}
                title={title}
                username={username}
                onDeleteClick={onDeleteClick}
                onEditClick={onEditClick}
            />
            <Box style={{ width: '100%', padding: theme.spacing.md}}>
                <Box
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography variant='span'>@{username}</Typography>
                    <Typography
                    style={{
                        fontWeight: '400px',
                        }}
                    variant='span'
                    >{getTimeAgoFormated(created_datetime)}
                    </Typography>
                </Box>
                <Typography
                    variant='h2'
                    style={{marginTop: theme.spacing.md}}
                    >{content}
                </Typography>
                <Box
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-start',
                        gap: '0.5em',
                        marginTop: theme.spacing.md
                    }}
                >
                    <Box style={{ display: 'flex', alignItems: 'center'}}>
                        <IconButton onClick={handleLikeClick}>
                            {
                                liked
                                ?
                                <FaHeart fill='red' size={18}/>
                                :
                                <FaRegHeart size={18} />
                            }
                        </IconButton>
                        <Typography>{liked ? '1' : '0'}</Typography>
                    </Box>
                            
                    <IconButton onClick={() => setOpen(true)}>
                        <MdOutlineInsertComment size={18}/>
                    </IconButton>
                </Box>
            </Box>
            <CommentPostModal isOpen={open} onClose={() => setOpen(false)} />
        </Box>
    )
}

export default ShowPostContainer;
