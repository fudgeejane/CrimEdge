import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard';
import Certification from './pages/certification';
import Account from './pages/account';
import Support from './pages/support';
import Landing from './auth/landing';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';
import ForgotPassword from './auth/forgotPassword';
import Payment from './Subscription/Payment';
import CreditDebit from './Subscription/CreditDebit';
import DigitalWallet from './Subscription/DigitalWallet';
import Membership from './Subscription/Membership';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect to landing */}
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/creditDebit" element={<CreditDebit />} />
        <Route path="/digitalWallet" element={<DigitalWallet />} />
        <Route path="/membership" element={<Membership />} />

        {/* Authenticated routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}
