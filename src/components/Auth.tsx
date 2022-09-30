import React from 'react'
import { AuthReducer, getInitAuthState } from '../auth_store'
import { AuthContextProvider } from '../contexts/AuthContext'
type Props = {
    children: React.ReactNode
}

const Auth = (props: Props) => {
    const [state, dispatch] = React.useReducer(AuthReducer, getInitAuthState())

    const storageChange = (e: StorageEvent) => {
        dispatch({ type: "loadStorage" })
    }

    React.useEffect(() => {
        dispatch({ type: "loadStorage" })
        window.addEventListener('storage', storageChange)
        return () => {
            window.removeEventListener('storage', storageChange)
        }
    }, [])

    return (
        <AuthContextProvider value={{ state, dispatch }}>
            {props.children}
        </AuthContextProvider>
    )
}

export default Auth