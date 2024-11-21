
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/Dashboard/DashBoard';
import DepositMoney from './pages/Dashboard/DepositMoney';
import WithdrawMoney from './pages/Dashboard/WithdrawMoney';
import TransferMoney from './pages/Dashboard/TransferMoney';
import History from './pages/Dashboard/History';
import UserProfile from './pages/Dashboard/UserProfile';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (

    <div className='w-full  bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }>

          <Route path="profile" element={<UserProfile />} />
          <Route path="deposit" element={<DepositMoney />} />
          <Route path="withdraw" element={<WithdrawMoney />} />
          <Route path="transfer" element={<TransferMoney />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
      <Toaster />
    </div>

  )
}

export default App
