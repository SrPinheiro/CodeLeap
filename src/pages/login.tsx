import useLoginPage from "src/hooks/login/useLoginPage";
import LoginPageView from "src/view/loginPage/loginPageView";

const Login = () => {
    const params = useLoginPage()
    return <LoginPageView {...params}/>;
}

export default Login;
