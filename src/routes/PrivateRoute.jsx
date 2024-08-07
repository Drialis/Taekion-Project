import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"

const PrivateRoute = ({ onlyAdmin }) => {

    const { logout, loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (loggedUser && loggedUser.role != "admin" && onlyAdmin === true) {
        return <Navigate to='/' />
    }

    return <Outlet />
}

export default PrivateRoute