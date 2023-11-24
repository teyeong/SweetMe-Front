import { sendCode } from 'api/user';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { LoginAtom, LoginStateAtom } from 'recoil/Login';

const KakaoAuthPage = () => {
  const setLogin = useSetRecoilState(LoginAtom);
  const setLoginState = useSetRecoilState(LoginStateAtom);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code: string = params.get('code') || '';

    const login = async () => {
      const res = await sendCode(code);
      const data = res?.data;
      console.log('로그인', data);
      if (data) {
        setLogin({
          nickname: data.nickname,
          email: data.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          isfirst: data.isfirst,
        });
        window.localStorage.setItem('accessToken', data.accessToken);
        setLoginState(true);
        window.location.href = '/';
      }
    };

    login();
  }, []);

  return <></>;
};

export default KakaoAuthPage;
