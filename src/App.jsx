/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "@/layout/Dashboard";
import { PATH } from "@/shared/routes/path";
import { ProtectedRoute } from "@/components/Protection";

import { Monitoring } from "@/pages/Monitoring";
import { History } from "@/pages/History";
import { Users } from "@/pages/Users";
import { Login } from "@/pages/Login";
import { Check } from "@/pages/Check";

import "./App.css";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("lang")) === null) {
      localStorage.setItem("lang", JSON.stringify("az"));
    } else {
      i18n.changeLanguage(JSON.parse(localStorage.getItem("lang")));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path={PATH.MONITORING} element={<Monitoring />} />
            <Route path={PATH.HISTORY} element={<History />} />
            <Route path={PATH.USERS} element={<Users />} />
            <Route path={PATH.CHECK} element={<Check />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
