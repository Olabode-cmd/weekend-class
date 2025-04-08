import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log({username, password})
        
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
              localStorage.setItem("token", data.accessToken);
              navigate("/dashboard")
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
          setLoading(false)
        }
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="text"
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login