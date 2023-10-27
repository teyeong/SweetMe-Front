import styled from 'styled-components';

const BtnGroup = () => {
  return (
    <Wrapper>
      <Btn>수정</Btn>
      <Btn>삭제</Btn>
      <Btn>홍보</Btn>
      <Btn>모집 완료</Btn>
    </Wrapper>
  );
};

export default BtnGroup;

const Wrapper = styled.div`
  display: flex;
`;

const Btn = styled.div`
  width: 100px;
  height: 35px;
  border: 1px #d9d9d9 solid;
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out color 200ms ease-in-out;

  &:hover {
    background-color: var(--navy);
    color: white;
    border-color: white;
  }
`;
