import Header from 'components/_common/Header';
import MenuBar from 'components/mypage/MeneBar';
import { LoginStateAtom } from 'recoil/Login';

import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';

const MyPage = () => {
  const loginState = useRecoilValue(LoginStateAtom);

  useEffect(() => {
    if (!loginState) {
      alert('로그인이 필요합니다.');
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      {loginState ? (
        <>
          <Header />
          <MenuBar />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MyPage;
