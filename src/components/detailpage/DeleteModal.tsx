import styled from 'styled-components';

interface DeleteModalProps {
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = (props: DeleteModalProps) => {
  const handleYes = () => {
    props.setIsDelete(true);
  };

  const handleNo = () => {
    props.setIsDelete(false);
  };

  return (
    <Wrapper>
      <Header>
        <Title>정말 삭제하시겠습니까?</Title>
        <Border />
      </Header>
      <Main>
        <Btn className="yes" onClick={handleYes}>
          확인
        </Btn>
        <Btn className="no" onClick={handleNo}>
          취소
        </Btn>
      </Main>
    </Wrapper>
  );
};

export default DeleteModal;

const Wrapper = styled.div`
  width: 340px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 2px solid var(--navy);
  background-color: white;

  position: absolute;
  bottom: calc(100% + 15px);
  left: -100%;
  z-index: 300;
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Border = styled.div`
  height: 0;
  width: 100%;
  border-bottom: 1px solid var(--navy);
  margin: 10px 0;
`;

const Main = styled.div`
  display: flex;
`;

const Btn = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--light_pink);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &.yes {
    margin-right: 5px;
  }

  &.no {
    border: 2px solid var(--dark_pink);
    background-color: white;
  }
`;
