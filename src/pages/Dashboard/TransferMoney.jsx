import { useState } from "react";
import { toast } from "react-hot-toast";
import { transferMoney } from "../../services/api";

const TransferMoney = () => {
    const [formData, setFormData] = useState({ toAccount: "", amount: "", pin: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await transferMoney(formData);
            toast.success("Money transferred successfully!");
        } catch (err) {
            toast.error(err.response.data.message || "Failed to transfer money");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
            <h2 className="text-2xl font-bold">Transfer Money</h2>
            <input
                type="text"
                name="toAccount"
                placeholder="Recipient Account Number"
                value={formData.toAccount}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
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
                Transfer
            </button>
        </form>
    );
};

export default TransferMoney;
