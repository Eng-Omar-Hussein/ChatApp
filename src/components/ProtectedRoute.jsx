import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    const Remember = localStorage.getItem("Remember")
    console.log(isAuthenticated)
    if (isAuthenticated === "true" || Remember === "true") {
        return children
    }
    return <Navigate to="/" replace />
}
export default ProtectedRoute