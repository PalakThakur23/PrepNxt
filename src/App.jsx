import PreparationTracker from "./pages/PreparationTracker";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

function PlaceholderPage() {
  return <h1>Page coming soon!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PlaceholderPage />} />
        <Route path="/signup" element={<PlaceholderPage />} />

        {/* Dashboard pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
  path="/tracker"
  element={<PreparationTracker />}
/>
          <Route path="/missions" element={<PlaceholderPage />} />
          <Route path="/subjects" element={<PlaceholderPage />} />
          <Route path="/coding" element={<PlaceholderPage />} />
          <Route path="/companies" element={<PlaceholderPage />} />
          <Route path="/interview" element={<PlaceholderPage />} />
          <Route path="/skill-gap" element={<PlaceholderPage />} />
          <Route path="/resources" element={<PlaceholderPage />} />
          <Route path="/notifications" element={<PlaceholderPage />} />
          <Route path="/settings" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;