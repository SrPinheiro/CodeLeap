import { ChangeEventHandler, FormEvent } from "react";
import { Box } from "src/components/styleds/Box";
import { Button } from "src/components/styleds/Button";
import { CenterAlignContainer } from "src/components/styleds/CenterAlignContainer";
import { FlexContainer } from "src/components/styleds/FlexContainer";
import { TextInput } from "src/components/inputs/TextInput";
import Typography from "src/components/Typograph";
import { useTheme } from "styled-components";

type props = {
    username: string,
    updateUsername: ChangeEventHandler<HTMLInputElement>,
    handleSubmitForm: (e: FormEvent) => void
}
const LoginPageView = ({ username, updateUsername, handleSubmitForm }: props) => {
    const theme = useTheme()

    return (
        <CenterAlignContainer>
            <FlexContainer style={{ borderRadius: '10px' }}>
                <form onSubmit={handleSubmitForm} style={{ width: '100%' }}>
                    <Typography variant="h1">Welcome to CodeLeap network!</Typography>
                    <Typography variant="p" style={{ marginTop: theme.spacing.lg }}>
                        Please enter your username
                    </Typography>
                    <TextInput
                        type="text"
                        placeholder="John Doe"
                        value={username}
                        onChange={updateUsername}
                        style={{ width: '100%', marginTop: theme.spacing.sm }}
                    />
                    <Box
                        style={{
                        marginTop: theme.spacing.md,
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'center',
                        }}
                    >
                        <Button type="submit" disabled={!username}>
                        ENTER
                        </Button>
                    </Box>
                </form>
            </FlexContainer>
        </CenterAlignContainer>
    )
}

export default LoginPageView;
