import { useNavigate } from "react-router"  

const Dashboard = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    if (!token) {
        navigate("/login")
    }
    return (
        <div>
            <h1>Dashboard</h1>
            {token ? "Token found" : "Token not found"}
            <button onClick={() => {
                localStorage.removeItem("token")
                navigate("/login")
            }}>Logout</button>
        </div>
    )
}

export default Dashboard