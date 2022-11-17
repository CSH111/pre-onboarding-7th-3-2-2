import * as S from "./styles";

const LoginForm = () => {
  return (
    <S.Form>
      <legend>로그인</legend>
      <label>아이디</label>
      <input type="email" />
      <label>비밀번호</label>
      <input type="password" />
      <button>로그인</button>
    </S.Form>
  );
};

export default LoginForm;
