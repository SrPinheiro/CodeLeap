import { ChangeEventHandler } from "react";
import { Box } from "src/components/Box";
import { Button } from "src/components/Button";
import { CenterAlignContainer } from "src/components/CenterAlignContainer";
import { FlexContainer } from "src/components/FlexContainer";
import { TextInput } from "src/components/TextInput";
import Typography from "src/components/Typograph";

type props = {
    username: string,
    updateUsername: ChangeEventHandler<HTMLInputElement>,
    hangleLogin: () => void
}
const LoginPageView = ({ username, updateUsername, hangleLogin }: props) => {

    return (
        <CenterAlignContainer>
            <FlexContainer style={{ borderRadius: '10px'}}>
                <Typography variant="h2">Welcome to CodeLeap network!</Typography>
                <Typography variant='p' style={{ marginTop: '24px'}}>Please enter your username</Typography>
                <TextInput type="text" style={{ marginTop: '8px'}} placeholder="Jhon doe" value={username} onChange={updateUsername}/>
                <Box className="df-right">
                    <Button style={{marginTop: '16px'}} type="button" disabled={!username} onClick={hangleLogin}>ENTER</Button>
                </Box>
            </FlexContainer>
        </CenterAlignContainer>
    )
}

export default LoginPageView;
