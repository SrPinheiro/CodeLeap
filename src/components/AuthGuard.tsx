import { JSX } from "react"
import { Navigate } from "react-router-dom"

type props = {
    children: JSX.Element
}

const AuthGuard = ({ children }: props) => {
    const isAuthenticated = false

    if (!isAuthenticated) return <Navigate to={'/login'} />
    
    return children
}

export default AuthGuard;
