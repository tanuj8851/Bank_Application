import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fetchHistory } from "../../services/api";

const History = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchedHistory = async () => {
            try {
                const response = await fetchHistory();
                setTransactions(response.data);
            } catch (err) {
                toast.error("Failed to fetch transaction history");
            }
        };
        fetchedHistory();
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow space-y-4">
            <h2 className="text-2xl font-bold">Transaction History</h2>
            <ul className="space-y-2">
                {transactions.map((txn, index) => (
                    <li key={index} className="border-b py-2">
                        <p>Type: {txn.type}</p>
                        <p>Amount: ${txn.amount}</p>
                        <p>Balance: ${txn.balanceAfter}</p>
                        <p>Date: {txn.timestamp}</p>
                        {txn.type === "Transfer" && (
                            <p>To/From: {txn.recipient || txn.sender}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
