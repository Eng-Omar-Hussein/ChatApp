import { Navigate } from "react-router-dom";

function Remember({ children }) {
    const Remember = localStorage.getItem("Remember")
    console.log(Remember)
    if (Remember !== "true") {
        return children
    }
    return <Navigate to="/chat" replace />
}
export default Remember