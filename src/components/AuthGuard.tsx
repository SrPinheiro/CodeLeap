import { JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'

type props = {
    children: JSX.Element
}

const AuthGuard = ({ children }: props) => {
    const auth = useAuth()
    const isAuthenticated = !!auth.username

    if (!isAuthenticated) return <Navigate to={'/login'} />
    
    return children
}

export default AuthGuard;
