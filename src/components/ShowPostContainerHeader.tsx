import { TbEdit, TbTrashXFilled } from "react-icons/tb"
import { Box } from "src/components/Box"
import IconButton from "src/components/IconButton"
import Typography from "src/components/Typograph"
import { useTheme } from "styled-components"
import HeaderContent from "src/components/HeaderContent"
import { HeaderContainer } from "src/components/HeaderContainer"
import { useAuth } from "src/hooks/useAuth"
import { PostType } from "src/utils/types"

type props = {
    post: PostType
    title?: string
    username?: string
    onDeleteClick: (value: PostType) => void
    onEditClick: (value: PostType) => void
}

const ShowPostContainerHeader = ({post, title, username, onDeleteClick, onEditClick}: props) => {
    const theme = useTheme()
    const auth = useAuth()
    const isAuthor = username === auth.username

    return (
        <HeaderContainer style={{ borderRadius: `${theme.spacing.md} ${theme.spacing.md} 0 0`, }}>
            <HeaderContent>
                <Typography
                    variant='h1'
                    style={{
                        wordBreak: 'break-word'
                    }}
                >{ title }
                </Typography>
                {
                    isAuthor && (
                        <Box style={{ width: '4em', display: 'flex', justifyContent: "flex-start"}}>
                            <IconButton
                                onClick={() => onDeleteClick(post)}
                            >
                                <TbTrashXFilled size={theme.font.size.lg}/>
                            </IconButton>
                            <IconButton
                                onClick={() => onEditClick(post)}
                            >
                                <TbEdit size={theme.font.size.lg}/>
                            </IconButton>
                        </Box>
                    )
                }
            </HeaderContent>
        </HeaderContainer>
    )
}

export default ShowPostContainerHeader;
