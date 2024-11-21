import Sidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;
