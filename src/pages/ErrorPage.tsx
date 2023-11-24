import styled from 'styled-components';

import Header from 'components/_common/Header';
import logo from '../assets/logo.svg';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Div>
        <Container>
          <Logo src={logo} />
          <p>잘못된 경로로 접근하셨습니다.</p>
        </Container>
      </Div>
    </>
  );
};

const Div = styled.div`
  height: calc(100vh - 320px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
  }
`;

const Container = styled.div`
  width: 600px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid var(--navy);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Logo = styled.img`
  width: 200px;
  position: absolute;
  background-color: white;
  top: -50px;
`;

export default ErrorPage;
