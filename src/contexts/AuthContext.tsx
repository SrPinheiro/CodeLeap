import { createContext, ReactNode, useState } from "react";
import { getCurrentUser, updateUser } from "src/utils/authHelpers";
import { authType } from "src/utils/types";

const defaultValues: authType = {
    username: getCurrentUser(),
    logIn: () => {},
    logOut: () => {}
}

const AuthContext = createContext(defaultValues)

type props = {
    children: ReactNode
}

const AuthProvider = ({ children }: props) => {
    const [username, setUsername] = useState<string>(getCurrentUser())
    
    const logIn = (newUser: string): void => {
        if (!newUser) throw Error('Invalid user.')

        setUsername(newUser)
        updateUser(newUser)
    }

    const logOut = (): void => {
        updateUser('')
    }

    const providerValues: authType = {
        username,
        logIn,
        logOut
    }

    return <AuthContext.Provider value={providerValues}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider}
