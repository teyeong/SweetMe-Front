import { useState } from 'react';
import styled from 'styled-components';

import { ModalProps } from '../_common/props';

const NicknameEditModal = ({ setIsModalOpen }: ModalProps) => {
  const [nickname, setNickname] = useState('');

  // input 값 관리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const specialCharacterRegex = /[@#$%^&*()+{}\[\]:;<>,?~\\"']/;
    if (specialCharacterRegex.test(value)) {
      alert('특수문자는 닉네임에 포함할 수 없습니다.');
    } else {
      setNickname(e.target.value);
    }
  };

  // 저장 클릭 or 엔터 클릭
  const handleSubmit = (e: React.FormEvent) => {
    // 새로고침 방지
    e.preventDefault();

    // 닉네임 정보 수정 api 호출
    console.log(nickname);
  };

  const handleWithdrawalClick = () => {
    // 회원 탈퇴 api 호출
  };

  return (
    <Div>
      <Container>
        <XBtn onClick={() => setIsModalOpen(false)}>X</XBtn>
        <p>변경할 닉네임을 입력해주세요!</p>
        <Form onSubmit={handleSubmit}>
          <input type="text" value={nickname} onChange={handleInputChange} />
          <button type="submit">저장</button>
          <button className="withdrawal" onClick={handleWithdrawalClick}>
            회원 탈퇴
          </button>
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
    margin: 20px;
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
  height: 200px;
  margin-bottom: 25px;
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

    // 회원 탈퇴 버튼 css
    &.withdrawal {
      border-radius: 15px;
      border: 5px solid rgba(255, 226, 226, 0.93);
      background: #fff;
    }
  }
`;

export default NicknameEditModal;
