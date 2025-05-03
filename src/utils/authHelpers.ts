const userStorageKey = 'currentUserKey'

const updateUser = (user: string): void => {
    if(!user){
        localStorage.removeItem(userStorageKey)

        return
    }

    localStorage.setItem(userStorageKey, user)
}

const getCurrentUser = (): string => {
    return localStorage.getItem(userStorageKey) ?? ''
}

export {
    userStorageKey,
    updateUser,
    getCurrentUser
}
