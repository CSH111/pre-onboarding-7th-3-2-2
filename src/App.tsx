import { Route, Routes } from "react-router-dom";

import { Accounts, Etc, Home, Investments, Login, Users } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="accounts" element={<Accounts />}>
          <Route index element={<Investments />} />
          <Route path="investments" element={<Investments />} />
          <Route path="etc" element={<Etc />} />
        </Route>
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
