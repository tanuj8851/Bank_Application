
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useAuth();



    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-blue-600 p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">SecureBank</Link>
                <div>
                    {user ? (
                        <>
                            <Link to="/dashboard" className="text-white hover:text-blue-200 mx-2">Dashboard</Link>
                            <button
                                onClick={handleLogout}
                                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-blue-200 mx-2">Login</Link>
                            <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar