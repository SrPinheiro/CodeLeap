import { JSX } from "react"

export type pageType = {
    path: string,
    element: JSX.Element,
    title: string,
    authGuard: boolean
}

export type authType = {
    username: string,
    logIn: (user: string) => void,
    logOut: () => void
}