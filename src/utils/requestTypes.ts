export type ResponseType<T> = {
    count: number
    next: object
    previus: object
    result: T
}

export type ArrayResponseType<T> = {
    count: number
    next: object
    previus: object
    results: T[]
}

export type PostCreateNewPost = {
    username: string
    title: string
    content: string
}
