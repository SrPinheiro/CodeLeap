import { JSX } from "react"

export type StringFiedDate = string

export type PageType = {
    path: string,
    element: JSX.Element,
    title: string,
    authGuard: boolean
}

export type AuthType = {
    username: string,
    logIn: (user: string) => void,
    logOut: () => void
}

export type PostType = {
    id: number,
    username: string,
    created_datetime: StringFiedDate,
    title: string,
    content: string
    author_ip: string
}
