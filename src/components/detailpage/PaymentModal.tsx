import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import kakaopayImg from '../../assets/kakao_pay_button.png';
import { UserInfoAtom } from 'recoil/User';

import { requestPayment } from 'api/payment';

const PaymentModal = () => {
  const { postId } = useParams();
  const postIdAsNumber = postId ? parseInt(postId) : 0;

  const navigate = useNavigate();

  const userInfo = useRecoilValue(UserInfoAtom);

  const { IMP } = window;
  IMP.init('imp12737001');

  const requestPay = () => {
    // 결제 요청
    IMP.request_pay(
      {
        pg: 'kakaopay.TC0ONETIME',
        merchant_uid: `${new Date().getTime() + postIdAsNumber} `,
        name: '스윗미 모집글 홍보비',
        amount: 1000,
        buyer_name: userInfo.nickname,
        buyer_email: userInfo.email,
      },
      function (res: any) {
        if (res.success) {
          // 결제 정보 POST 요청
          requestPayment(postIdAsNumber).then((res) => {
            console.log(res);
          });
          alert('결제 성공');
        } else {
          console.log(res);
          alert('결제 실패');
        }
        navigate(`/`);
      },
    );
  };

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
        <PaymentButtonWrapper>
          <PaymentButton src={kakaopayImg} onClick={() => requestPay()} />
        </PaymentButtonWrapper>
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceTag = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 13px;
  margin-bottom: 15px;
`;

const PaymentButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentButton = styled.img`
  width: 180px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
