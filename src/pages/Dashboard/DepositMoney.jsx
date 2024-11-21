import { useState } from "react";
import { toast } from "react-hot-toast";
import { depositMoney } from "../../services/api";

const DepositMoney = () => {
    const [formData, setFormData] = useState({ amount: 0, pin: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await depositMoney({ amount: Number(formData.amount), pin: formData.pin });
            toast.success("Money deposited successfully!");
        } catch (err) {
            toast.error(err.response.data.message || "Failed to deposit money");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <h2 className="text-2xl font-bold">Deposit Money</h2>
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="password"
                name="pin"
                placeholder="4-digit PIN"
                value={formData.pin}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded">
                Deposit
            </button>
        </form>
    );
};

export default DepositMoney;
