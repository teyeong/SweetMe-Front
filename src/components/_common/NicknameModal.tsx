import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { ModalProps } from './props';
import { LoginAtom } from 'recoil/Login';
import { UserInfoAtom } from 'recoil/User';
import { patchNickname } from 'api/user';

const NicknameModal = ({ setIsModalOpen }: ModalProps) => {
  const [login, setLogin] = useRecoilState(LoginAtom);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const [nickname, setNickname] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const specialCharacterRegex = /[()+{}\[\]:;<>,?~\\"']/;
    if (specialCharacterRegex.test(value)) {
      alert('특수문자는 닉네임에 포함할 수 없습니다.');
    } else {
      setNickname(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // 새로고침 방지
    e.preventDefault();

    // 닉네임 patch api 호출
    const res = await patchNickname(nickname);
    if (res?.status === 200) {
      setLogin({
        ...login,
        isFirst: false,
      });
      setUserInfo({
        ...userInfo,
        nickname: nickname,
      });
      console.log(nickname);
      setIsModalOpen(false);
    }
  };

  return (
    <Div>
      <Container>
        <XBtn onClick={() => setIsModalOpen(false)}>X</XBtn>
        <p>
          닉네임을 입력해주세요!
          <br />
          기본 닉네임은 카카오톡 이름입니다.
        </p>
        <Form onSubmit={handleSubmit}>
          <input type="text" value={nickname} onChange={handleInputChange} />
          <button type="submit">저장</button>
        </Form>
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
  height: 135px;
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

export default NicknameModal;
