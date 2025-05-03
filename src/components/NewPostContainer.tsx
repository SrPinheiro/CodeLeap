import { Box } from "src/components/Box";
import { useTheme } from "styled-components";
import Typography from "src/components/Typograph";
import { TextInput } from "src/components/TextInput";
import { Button } from "src/components/Button";
import { TextAreaInput } from "src/components/TextAreaInput";

const NewPostContainer = () => {
    const theme = useTheme()

    return (
        <Box
            style={{
                width: '100%',
                border: `1px solid ${theme.colors.gray}`,
                borderRadius: '16px',
                padding: theme.spacing.md
            }}
        >
            <Typography variant='h1'>What’s on your mind?</Typography>
            <Typography variant='p' style={{marginTop: theme.spacing.mdx}} >title</Typography>
            <TextInput placeholder='Hello Word' style={{ width: '100%'}} />
            <Typography variant='p' style={{marginTop: theme.spacing.mdx}}>Content</Typography>
            <TextAreaInput placeholder='Content Here' style={{ maxWidth: '100%', minWidth: '100%'}} rows={4}  />
            <Box className="df-right">
                <Button style={{marginTop: '16px'}} type="button" >Create</Button>
            </Box>
        </Box>
    )
}

export default NewPostContainer;
