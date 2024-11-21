import { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (credentials) => {
        try {
            const response = await api.post("/user/login", credentials);
            if (response.status === 200) {
                setUser(response.data.user);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setIsAuthenticated(true);
            }

        } catch (error) {
            console.error("Login failed:", error.message);
        }

    };




    const userProfile = async () => {
        try {
            const response = await api.get("/user/profile");
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
            await api.post("/user/logout");
            setUser(null);
            localStorage.removeItem("user");
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };



    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, userProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
