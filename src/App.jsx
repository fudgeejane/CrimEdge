import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from './components/Layout'; 
import Dashboard from './pages/Dashboard';
import Course from './pages/Course'; // Fixed: Ensure CoursePage is imported
import Certification from './pages/Certification';
import Support from './pages/Support';
import Account from './pages/Account';

import Landing from './auth/Landing'; 
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';

import CreditDebit from './subscription/CreditDebit';
import DigitalWallet from './subscription/DigitalWallet';
import Membership from './subscription/Membership';
import Payment from './subscription/Payment';

import AdminDashboard from './pages/admin/adminDashboard';
import InstructorDashboard from './pages/instructor/insDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to /landing */}
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Landing Page route */}
        <Route path="/landing" element={<Landing />} />

        {/* Authenticated routes under Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<Course />} /> {/* Fixed: Ensure this matches the correct import */}
          <Route path="/certification" element={<Certification />} />
          <Route path="/account" element={<Account />} />
          <Route path="/support" element={<Support />} />
        </Route>

        {/* Subscription routes */}
        <Route path="/creditdebit" element={<CreditDebit />} />
        <Route path="/digitalwallet" element={<DigitalWallet />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/payment" element={<Payment />} />

        {/* Admin routes */}
        <Route path="/admindashboard" element={<AdminDashboard />} />

        {/* Instructor routes */}
        <Route path="/insdashboard" element={<InstructorDashboard />} />

        {/* Sign-out route */}
        <Route path="/signout" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
