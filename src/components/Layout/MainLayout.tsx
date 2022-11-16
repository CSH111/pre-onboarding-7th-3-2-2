import { Outlet } from "react-router-dom";

import Aside from "./Aside";

const MainLayout = () => {
  return (
    <div>
      <Aside />
      <Outlet />
    </div>
  );
};

export default MainLayout;
