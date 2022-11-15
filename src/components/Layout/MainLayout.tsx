import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>사이드바</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
