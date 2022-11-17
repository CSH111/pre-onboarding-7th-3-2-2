import { Outlet } from "react-router-dom";

import * as S from "./styles";

const LoginLayout = () => {
  return (
    <S.LoginLayoutContainer>
      <Outlet />
    </S.LoginLayoutContainer>
  );
};

export default LoginLayout;
