import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/dashboard-page";
import Appointment from "../pages/Class";
import ClassMaster from "../pages/Class";

const PmsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/classMaster" element={<ClassMaster />} />
    </Routes>
  );
};

export default PmsRouter;
