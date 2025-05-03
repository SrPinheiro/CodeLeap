import { ChangeEvent, useState } from "react"
import { useAuth } from "src/hooks/useAuth"
import { useNavigate } from "react-router-dom"

const useLoginPage = () => {
    const [username, setUsername] = useState<string>('')
    const { logIn } = useAuth()
    const navigate = useNavigate()
    const updateUsername = ({target: { value }}: ChangeEvent<HTMLInputElement>) => {
        setUsername(value)
    }

    const hangleLogin = () => {
        logIn(username)
        navigate('/')
    }

    return {
        username,
        updateUsername,
        hangleLogin
    }
}

export default useLoginPage;
