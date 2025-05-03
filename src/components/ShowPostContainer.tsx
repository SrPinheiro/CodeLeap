import { CSSProperties, useTheme } from 'styled-components';
import { Box } from 'src/components/Box';
import Typography from 'src/components/Typograph';
import { PostType } from 'src/utils/types';
import { getTimeAgoFormated } from 'src/utils/stringHelpers';
import ShowPostContainerHeader from 'src/components/ShowPostContainerHeader';

type props = {
    post: PostType
    style?: CSSProperties
    onDeleteClick: (value: PostType) => void
    onEditClick: (value: PostType) => void
}

const ShowPostContainer = ({ post, style, onDeleteClick, onEditClick }: props) => {
    const theme = useTheme()
    const { title, content, username, created_datetime } = post

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
            </Box>
        </Box>
    )
}

export default ShowPostContainer;
