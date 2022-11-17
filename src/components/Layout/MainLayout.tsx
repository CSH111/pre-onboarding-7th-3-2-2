import { Outlet } from "react-router-dom";

import Aside from "./Aside";
import * as S from "./styles";

const MainLayout = () => {
  return (
    <S.MainLayoutContainer>
      <Aside />
      <Outlet />
    </S.MainLayoutContainer>
  );
};

export default MainLayout;
