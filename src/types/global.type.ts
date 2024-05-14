export interface IAppContext {
    user: IUser | null,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface IUser {
    wallet_address: string,
    api_key: string,
    package: string
}