import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "@/layout/Dashboard";
import { PATH } from "@/shared/routes/path";
import { ProtectedRoute } from "@/components/Protection";

import { Monitoring } from "@/pages/Monitoring";
import { History } from "@/pages/History";
import { Users } from "@/pages/Users";
import { Login } from "@/pages/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path={PATH.MONITORING} element={<Monitoring />} />
            <Route path={PATH.HISTORY} element={<History />} />
            <Route path={PATH.USERS} element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
