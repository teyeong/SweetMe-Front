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
          isFirst: data.isFirst,
        });
        window.localStorage.setItem('accessToken', data.accessToken);
        setLoginState(true);
        window.location.href = '/';
      }
    };

    login();
  }, []);

  /*
  useEffect(() => {
    console.log('사용자 정보 불러오기');
    const token = window.localStorage.getItem('accessToken') || '';
    const getUser = async () => {
      const res = await getUserInfo(token);
      const data = res?.data;
      console.log('유저 정보', data);
      if (data) {
        setUserInfo({
          nickname: data.nickname,
          email: data.email,
          profileImage: data.profileImage,
        });
      }
    };
    if (token !== '') {
      getUser();
      window.location.href = '/';
    }
  }, [isLoggedIn]);
  */
  return <>로그인 중</>;
};

export default KakaoAuthPage;
