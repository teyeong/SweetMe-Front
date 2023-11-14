import styled from 'styled-components';

import kakao from '../../assets/kakao_login_large_narrow.png';
import { ModalProps } from './props';
import { KAKAO_AUTH_URI } from 'api/user';

const LoginModal = ({ setIsModalOpen }: ModalProps) => {
  const handleKakaoLoginClick = () => {
    // 카카오 로그인 인가코드 발급 api
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <Div>
      <Container>
        <XBtn onClick={() => setIsModalOpen(false)}>X</XBtn>
        <p>
          안녕하세요!
          <br />
          SweetMe에서 스터디원을 모집해보세요
        </p>
        <img src={kakao} onClick={handleKakaoLoginClick}></img>
      </Container>
    </Div>
  );
};

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(217, 217, 217, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border-radius: 15px;
  background: #fff;
  width: 650px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 32px;
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 25px;
  }
  img {
    margin: auto;
    margin-top: 20px;
    cursor: pointer;
  }
`;

const XBtn = styled.button`
  color: black;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 15px;
  cursor: pointer;
`;

export default LoginModal;
