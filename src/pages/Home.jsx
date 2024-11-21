import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mx-auto mt-16 px-4">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to SecureBank</h2>
                <p className="text-xl text-gray-600 mb-8">Your trusted partner for secure banking solutions</p>
                <div className="flex justify-center gap-4">
                    <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Get Started
                    </Link>
                    <Link to="/login" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
                        Sign In
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
                    <p className="text-gray-600">Your security is our top priority. All transactions are protected with industry-standard encryption.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Easy Transfers</h3>
                    <p className="text-gray-600">Transfer money to other accounts instantly with our simple and intuitive interface.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
                    <p className="text-gray-600">Keep track of all your transactions with detailed history and statements.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;