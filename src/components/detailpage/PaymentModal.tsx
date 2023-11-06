import styled from 'styled-components';

const PaymentModal = () => {
  return (
    <Wrapper>
      <Header>
        <Title>SweetMe 모집글 홍보</Title>
        <Border />
      </Header>
      <Main>
        <PriceTag>비용 : 1000원</PriceTag>
        <Description>
          * 홍보 시 메인화면 상단 배너에 모집글이 게시됩니다.
        </Description>
        <PaymentButton></PaymentButton>
      </Main>
    </Wrapper>
  );
};

export default PaymentModal;

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

const Header = styled.div``;

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

const Main = styled.div``;

const PriceTag = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 12px;
`;

const PaymentButton = styled.button``;
