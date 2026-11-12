
import PreparationTracker from "./pages/PreparationTracker";
import DailyMissions from "./pages/DailyMissions";
import SubjectsLearning from "./pages/SubjectsLearning";
import MockInterview from "./pages/MockInterview";
import CompanyDrives from "./pages/CompanyDrives";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkillGapAnalysis from "./pages/SkillGapAnalysis";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Resources from "./pages/Resources";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import CodingPractice from "./pages/CodingPractice";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function PlaceholderPage() {
  return <h1>Page coming soon!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/forgot-password" element={<PlaceholderPage />} />

        {/* Dashboard pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tracker" element={<PreparationTracker />} />

          <Route path="/missions" element={<DailyMissions />} />

          <Route path="/subjects" element={<SubjectsLearning />} />

          <Route path="/interview" element={<MockInterview />} />

          <Route path="/coding" element={<CodingPractice />} />
          <Route path="/companies" element={<CompanyDrives />} />
          <Route path="/skill-gap" element={<SkillGapAnalysis />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
