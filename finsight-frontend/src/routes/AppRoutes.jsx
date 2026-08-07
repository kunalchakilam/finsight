import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";

import Home from "../pages/Home";
import DashboardPage from "../pages/DashboardPage";
import Transactions from "../pages/Transactions";
import Analytics from "../pages/Analytics";
import Budgets from "../pages/Budgets";
import More from "../pages/More";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/home" element={<Home />} />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/budgets"
          element={<Budgets />}
        />

        <Route
          path="/more"
          element={<More />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;