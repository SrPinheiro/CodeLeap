import { JSX } from "react"

export type pageType = {
    path: string,
    element: JSX.Element,
    title: string,
    authGuard: boolean
}