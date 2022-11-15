import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import { Dashboard, Etc, Investment, Login, Users } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="accounts">
          <Route index element={<Navigate to="investment" />} />
          <Route path="investment" element={<Investment />} />
          <Route path="etc" element={<Etc />} />
        </Route>
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
