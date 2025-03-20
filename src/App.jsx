import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard';
import Certification from './pages/certification';
import Account from './pages/account';
import Support from './pages/support';
import Landing from './auth/landing';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
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
