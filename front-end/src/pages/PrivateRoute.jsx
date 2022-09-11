import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {

    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if(!user && !token) {
        return <Navigate to="/" />
    }

    return (
        <>
            { children }
        </>
    )
}