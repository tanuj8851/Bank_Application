import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";


const Sidebar = () => {
    const { user, userProfile } = useAuth();


    useEffect(() => {
        if (!user) {
            userProfile();

        }

    }, [user, userProfile])

    if (!user) {
        return (
            <div className="bg-blue-500 text-white w-64 p-4 flex flex-col items-center">
                <p>Loading user information...</p>
            </div>
        );
    }


    return (
        <div className="bg-blue-500 text-white w-64 p-4 flex flex-col items-center">
            {/* User Profile */}
            <div className="mb-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-500 text-2xl font-bold mb-2">
                    {/* {user?.username.toUpperCase()} */}
                </div>
                <h3 className="text-xl font-bold">{user?.username}</h3>
                {user ? <p>{user.username}</p> : <p>dummyuser</p>}
                {user ? <p>{user.balance}</p> : <p>10000</p>}
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4 text-center w-full">
                <li>
                    <Link
                        to="/dashboard/profile"
                        className="block bg-white text-blue-500 py-2 rounded"
                    >
                        User Profile
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/deposit"
                        className="block bg-white text-blue-500 py-2 rounded"
                    >
                        Deposit Money
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/withdraw"
                        className="block bg-white text-blue-500 py-2 rounded"
                    >
                        Withdraw Money
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/transfer"
                        className="block bg-white text-blue-500 py-2 rounded"
                    >
                        Transfer Money
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/history"
                        className="block bg-white text-blue-500 py-2 rounded"
                    >
                        Transaction History
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
