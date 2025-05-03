import { CSSProperties, useTheme } from "styled-components";
import { Box } from "src/components/Box";
import { HeaderContainer } from "./HeaderContainer";
import Typography from "src/components/Typograph";
import { PostType } from "src/utils/types";

type props = {
    post: PostType
    style?: CSSProperties
}
const ShowPostContainer = ({ post: { title, content, username }, style }: props) => {
    const theme = useTheme()

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
                        }}
                    variant="span"
                    >25 minutes ago
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
