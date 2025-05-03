import { ChangeEventHandler } from "react";
import { Button } from "src/components/Button";
import { CenterAlignContainer } from "src/components/CenterAlignContainer";
import { FlexContainer } from "src/components/FlexContainer";
import { TextInput } from "src/components/TextInput";

type props = {
    username: string,
    updateUsername: ChangeEventHandler<HTMLInputElement>,
    hangleLogin: () => void
}
const LoginPageView = ({ username, updateUsername, hangleLogin }: props) => {

    return (
        <CenterAlignContainer>
            <FlexContainer style={{ borderRadius: '10px'}}>
                <h2>Welcome to CodeLeap network!</h2>
                <p style={{ marginTop: '24px'}}>Please enter your username</p>
                <TextInput type="text" style={{ marginTop: '8px'}} placeholder="Jhon doe" value={username} onChange={updateUsername}/>
                <div className="df-right">
                    <Button style={{marginTop: '16px'}} type="button" disabled={!username} onClick={hangleLogin}>ENTER</Button>
                </div>
            </FlexContainer>
        </CenterAlignContainer>
    )
}

export default LoginPageView;
