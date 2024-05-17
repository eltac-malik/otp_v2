import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./shared/lang";

import { Layout } from "@/layout/Dashboard";
import { PATH } from "@/shared/routes/path";
import { ProtectedRoute } from "@/components/Protection";

import { Explore } from "@/pages/Explore";
import { Notification } from "@/pages/Notification";
import { Profile } from "@/pages/Profile";
import { AnnounceRequest } from "@/pages/AnnounceRequest";
import { BlokerRequest } from "@/pages/BlokerRequest";
import { AgencyRequest } from "@/pages/AgencyRequest";
import { Dashboard } from "@/pages/Dashboard";
import { Statistics } from "@/pages/Statistics";
import { Settings } from "@/pages/Settings";
import { Companies } from "@/pages/Companies";
import { Employee } from "@/pages/Employee";
import { Bloker } from "@/pages/Bloker";
import { Users } from "@/pages/Users";
import { Pricing } from "@/pages/Pricing";
import { Login } from "@/pages/Login";
import { Notes } from "@/pages/Notes";
import { Instructions } from "@/pages/Instructions";
import { Language } from "@/pages/Settings/pages/Language";
import { NotificationSettings } from "@/pages/Settings/pages/NotificationSettings";

import "./App.css";

function App() {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("lang")) === null) {
      localStorage.setItem("lang", JSON.stringify("az"));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path={PATH.EXPLORE} element={<Explore />} />
            <Route path={PATH.PROFILE} element={<Profile />} />
            <Route path={PATH.NOTIFICATION} element={<Notification />} />
            <Route path={PATH.ANNOUNCE_REQUEST} element={<AnnounceRequest />} />
            <Route path={PATH.BLOKER_REQUEST} element={<BlokerRequest />} />
            <Route path={PATH.COMPANY_REQUEST} element={<AgencyRequest />} />
            <Route path={PATH.DASHBOARD} element={<Dashboard />} />
            <Route path={PATH.STATISTICS} element={<Statistics />} />
            <Route path={PATH.SETTINGS} element={<Settings />}>
              <Route path={PATH.LANGUAGE} element={<Language />} />
              <Route
                path={PATH.NOTIFICATION_SETTINGS}
                element={<NotificationSettings />}
              />
            </Route>
            <Route path={PATH.COMPANIES} element={<Companies />} />
            <Route path={PATH.EMPLOYEE} element={<Employee />} />
            <Route path={PATH.BLOKER} element={<Bloker />} />
            <Route path={PATH.USERS} element={<Users />} />
            <Route path={PATH.PRICING} element={<Pricing />} />
            <Route path={PATH.NOTES} element={<Notes />} />
            <Route path={PATH.INSTRUCTIONS} element={<Instructions />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
