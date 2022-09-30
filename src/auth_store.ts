
import IAuthUser from "./interfaces/IAuthUser"
import { clearAuthInfo, readAuthInfo, writeAuthInfo } from "./utils/storage"

export interface IAuthState {
    id?: string
    name?: string,
    avatar?: string,
    isLogin: boolean,
}

export const getInitAuthState = (): IAuthState => {
    const authInfo = readAuthInfo()
    return {
        id: authInfo?.id,
        name: authInfo?.name,
        avatar: authInfo?.avatar,
        isLogin: authInfo !== null
    }
}

type AuthAction =
    | { type: 'login', payload: IAuthUser }
    | { type: 'logout' }
    | { type: 'loadStorage' }

export type AuthDispatch = (action: AuthAction) => void
export const AuthReducer = (state: IAuthState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case "login":
            let auth = action.payload
            writeAuthInfo(auth)
            return {
                id: auth.id,
                name: auth.name,
                avatar: auth.avatar,
                isLogin: true
            }
        case "logout":
            clearAuthInfo()
            return getInitAuthState()
        case "loadStorage":
            let readAuth = readAuthInfo()
            if (readAuth) {
                return {
                    id: readAuth.id,
                    name: readAuth.name,
                    avatar: readAuth.avatar,
                    isLogin: true
                }
            } else {
                return {
                    isLogin: false
                }
            }
        default:
            throw new Error('Unhandled action type');
    }
}