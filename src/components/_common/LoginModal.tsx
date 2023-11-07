import { useState } from 'react';
import styled from 'styled-components';

import kakao from '../../assets/kakao_login_large_narrow.png';
import { ModalProps } from './props';

const LoginModal = ({ setIsModalOpen }: ModalProps) => {
  const [isLoginClick, setIsLoginClick] = useState(false);
  const [nickname, setNickname] = useState('');

  const handleKakaoLoginClick = () => {
    // 카카오 로그인 호출 api 추가 예정
    setIsLoginClick(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const specialCharacterRegex = /[@#$%^&*()+{}\[\]:;<>,?~\\"']/;
    if (specialCharacterRegex.test(value)) {
      alert('특수문자는 닉네임에 포함할 수 없습니다.');
    } else {
      setNickname(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    // 새로고침 방지
    e.preventDefault();

    // 닉네임 정보 포함 회원가입 api 호출
    console.log(nickname);
    setNickname('');
  };

  return (
    <Div>
      <Container>
        <XBtn onClick={() => setIsModalOpen(false)}>X</XBtn>
        {isLoginClick ? (
          <>
            <p>닉네임을 입력해주세요!</p>
            <Form onSubmit={handleSubmit}>
              <input
                type="text"
                value={nickname}
                onChange={handleInputChange}
              />
              <button type="submit">저장</button>
            </Form>
          </>
        ) : (
          <>
            <p>
              안녕하세요!
              <br />
              SweetMe에서 스터디원을 모집해보세요
            </p>
            <img src={kakao} onClick={handleKakaoLoginClick}></img>
          </>
        )}
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 145px;
  margin-top: 15px;
  justify-content: space-between;
  input {
    border-radius: 90px;
    border: 1px solid #000;
    background: #fff;
    width: 290px;
    height: 50px;
    font-size: 30px;
    padding: 15px;
  }
  button {
    width: 250px;
    height: 55px;
    font-size: 28px;
    text-align: center;
    border-radius: 15px;
    background: #ffe2e2;
    color: black;
    cursor: pointer;
  }
`;

export default LoginModal;
