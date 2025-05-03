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
                borderRadius: theme.spacing.md,
                padding: theme.spacing.lg
            }}
        >
            <Typography variant='h1'>What’s on your mind?</Typography>
            <Typography variant='p' style={{marginTop: theme.spacing.md}} >title</Typography>
            <TextInput placeholder='Hello Word' style={{ width: '100%'}} />
            <Typography variant='p' style={{marginTop: theme.spacing.md}}>Content</Typography>
            <TextAreaInput placeholder='Content Here' style={{ maxWidth: '100%', minWidth: '100%'}} rows={4}  />
            <Box
            style={{
                marginTop: theme.spacing.lg,
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
            }}>
                <Button type="button" >Create</Button>
            </Box>
        </Box>
    )
}

export default NewPostContainer;
