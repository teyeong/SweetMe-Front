import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { LoginStateAtom } from 'recoil/Login';
import { useEffect } from 'react';

import Header from 'components/_common/Header';
import Form from 'components/createpage/Form';
import { Container } from 'components/_common/pageLayout';

const CreatePage = () => {
  const isLogin = useRecoilValue(LoginStateAtom);

  useEffect(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      window.location.href = '/';
    }
  }, []);

  return (
    <Container>
      {isLogin ? (
        <>
          <Header />
          <Form />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CreatePage;
