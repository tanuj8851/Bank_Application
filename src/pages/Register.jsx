import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        pin: '',
        initialDeposit: 0
    });
    const Navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            toast.success("Registered successfully! Please log in.");
            Navigate("/login")
        } catch (err) {
            toast.error(err.response.data.message || "Registration failed");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="pin" className="sr-only">PIN</label>
                            <input
                                id="pin"
                                name="pin"
                                type="password"
                                required
                                maxLength="4"
                                pattern="[0-9]{4}"
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="4-digit PIN"
                                value={formData.pin}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="initialDeposit" className="sr-only">Initial Deposit</label>
                            <input
                                id="initialDeposit"
                                name="initialDeposit"
                                type="number"
                                min="0"
                                step="0.01"
                                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Initial Deposit (optional)"
                                value={formData.initialDeposit}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;