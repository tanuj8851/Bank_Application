import { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";
import toast from "react-hot-toast";



const AuthContext = createContext();


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem("token");
        return savedToken ? JSON.parse(savedToken) : null;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    const login = async (credentials) => {
        try {
            const response = await api.post("/user/login", credentials, { withCredentials: true });
            if (response.status === 200) {
                setUser(response.data.user);
                setToken(response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("token", JSON.stringify(response.data.token));
                setIsAuthenticated(true);
            }

        } catch (error) {
            if (error.response) {
                toast.error(`${error.response.data.message} ${error.response.data.attemptLeft || ''}`);



            }
        }

    };




    const userProfile = async () => {
        try {
            const response = await api.get("/user/profile", {
                withCredentials: true
            });
            if (response.status === 200) {
                setUser(response.data.user);
                localStorage.setItem("user", JSON.stringify(response.data.user));
            }
        } catch (error) {
            console.error("Error fetching user profile:", error.message);
        }
    }

    const logout = async () => {
        try {
            const res = await api.post("/user/logout", {
                withCredentials: true
            });

            setUser(null);
            localStorage.removeItem("user");
            setIsAuthenticated(false);

        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };



    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, userProfile, token }}>
            {children}
        </AuthContext.Provider>
    );
};
