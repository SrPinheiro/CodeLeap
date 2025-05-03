import { CSSProperties, useTheme } from "styled-components";
import { Box } from "src/components/Box";
import { HeaderContainer } from "./HeaderContainer";
import Typography from "./Typograph";
import { postType } from "src/utils/types";
import { useAuth } from "src/hooks/useAuth";

type props = {
    post: postType
    style?: CSSProperties
}
const ShowPostContainer = ({ post: { title, content, username }, style }: props) => {
    const theme = useTheme()
    const auth = useAuth()
    console.log(auth)

    return (
        <Box
            style={{
                width: '100%',
                border: `1px solid ${theme.colors.gray}`,
                borderRadius: '16px',
                ...style
            }}
        >
            <HeaderContainer style={{ borderRadius: `${theme.spacing.md}  ${theme.spacing.md} 0 0`, }}>
                <Typography variant="h1">{ title }</Typography>
            </HeaderContainer>
            <Box style={{ width: '100%', padding: theme.spacing.md}}>
                <Box
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography variant="span">@{username}</Typography>
                    <Typography
                    style={{
                        fontWeight: '400px',
                        marginTop: theme.spacing.md
                        }}
                    variant="span"
                    >25 minutes ago
                    </Typography>
                </Box>
                <Typography variant='h3'>{content}</Typography>
            </Box>
        </Box>
    )
}

export default ShowPostContainer;
