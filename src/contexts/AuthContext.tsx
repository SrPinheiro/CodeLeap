import { createContext, ReactNode, useState } from "react";
import { getCurrentUser, updateUser } from "src/utils/authHelpers";
import { AuthType } from "src/utils/types";

const defaultValues: AuthType = {
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
        setUsername('')
    }

    const providerValues: AuthType = {
        username,
        logIn,
        logOut
    }

    return <AuthContext.Provider value={providerValues}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
