import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Component/Home";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Pricing from "../Component/Pricing";
import Dashboard from "../Component/Dashboard";
import Genrateinvoice from "../Component/Genrateinvoice";
import AdminPanel from "../Component/AdminPanel";

import Signin from "../Pages/Signin";
import SignUp from "../Pages/Signup";

/* 🔐 USER PROTECTED ROUTE */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signin" replace />;
};

/* 🔐 ADMIN PROTECTED ROUTE */
const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/signin" replace />;
  if (role !== "admin") return <Navigate to="/" replace />;

  return children;
};

function Router() {
  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />

      {/* 🔒 User Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/genrateinvoice"
        element={
          <ProtectedRoute>
            <Genrateinvoice />
          </ProtectedRoute>
        }
      />

      {/* 🛡️ Admin Protected Route */}
      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminPanel />
          </AdminProtectedRoute>
        }
      />

      {/* ❌ Catch All */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
