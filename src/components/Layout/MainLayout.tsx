import { Outlet } from "react-router-dom";

import Aside from "./Aside";
import * as S from "./styles";

const MainLayout = () => {
  return (
    <S.Container>
      <Aside />
      <Outlet />
    </S.Container>
  );
};

export default MainLayout;
