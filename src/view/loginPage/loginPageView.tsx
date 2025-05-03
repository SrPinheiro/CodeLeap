import { ChangeEventHandler } from "react";
import { Box } from "src/components/Box";
import { Button } from "src/components/Button";
import { CenterAlignContainer } from "src/components/CenterAlignContainer";
import { FlexContainer } from "src/components/FlexContainer";
import { TextInput } from "src/components/TextInput";
import Typography from "src/components/Typograph";
import { useTheme } from "styled-components";

type props = {
    username: string,
    updateUsername: ChangeEventHandler<HTMLInputElement>,
    hangleLogin: () => void
}
const LoginPageView = ({ username, updateUsername, hangleLogin }: props) => {
    const theme = useTheme()

    return (
        <CenterAlignContainer>
            <FlexContainer style={{ borderRadius: '10px'}}>
                <Typography variant="h1">Welcome to CodeLeap network!</Typography>
                <Typography variant='p' style={{ marginTop: theme.spacing.lg }}>Please enter your username</Typography>
                <TextInput type="text" placeholder="Jhon doe" value={username} onChange={updateUsername}/>
                <Box
                style={{
                    marginTop: theme.spacing.md,
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                }}>
                    <Button type="button" disabled={!username} onClick={hangleLogin}>ENTER</Button>
                </Box>
            </FlexContainer>
        </CenterAlignContainer>
    )
}

export default LoginPageView;
