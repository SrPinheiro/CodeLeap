import { JSX } from "react"

export type stringFiedDate = string

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

export type postType = {
    id: number,
    username: string,
    created_datetime: stringFiedDate,
    title: string,
    content: string
    author_ip: string
}
