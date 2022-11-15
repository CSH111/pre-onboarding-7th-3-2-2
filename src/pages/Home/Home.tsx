import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home 사이드바
      <Outlet />
    </div>
  );
};

export default Home;
